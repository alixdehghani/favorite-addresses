import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, Subscription, switchMap } from "rxjs";
import { ApiService } from "./api.service";
import { SearchGeocodingInterface } from "./search-geocoding.interface";

@Component({
    selector: 'app-search-geocoding',
    templateUrl: 'search-geocoding.component.html',
    styleUrls: ['search-geocoding.component.scss']
})
export class SearchGeocodingComponent implements OnInit, OnDestroy {
    @Input() addressControl!: FormControl;
    @Input() latControl!: FormControl;
    @Input() lonControl!: FormControl;
    options: SearchGeocodingInterface[] = [];
    private _subscription!: Subscription;

    constructor(private _apiService: ApiService) { }

    ngOnInit(): void {
        this._subscription = this.addressControl.valueChanges
            .pipe(
                debounceTime(500),
                switchMap(value => {
                    return this._apiService.search(value);
                })
            ).subscribe({
                next: (data) => {
                    this.options = [...data];
                },
                error: (err) => {

                }
            });
    }

    onAddressClicked(option: SearchGeocodingInterface) {
        this.addressControl.setValue(option.display_name)
        this.latControl.setValue(option.lat);
        this.lonControl.setValue(option.lon);
    }

    ngOnDestroy(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}