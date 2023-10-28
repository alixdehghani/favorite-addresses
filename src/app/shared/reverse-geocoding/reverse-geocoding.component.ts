import { Component, EventEmitter, Input, OnDestroy, Output } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ApiService } from "./api.service";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";

@Component({
    standalone: true,
    imports: [
        CommonModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule
    ],
    selector: 'app-reverse-geocoding',
    templateUrl: 'reverse-geocoding.component.html',
    styleUrls: ['reverse-geocoding.component.scss'],
    providers: [ApiService]
})
export class ReverseGeocodingComponent implements OnDestroy {
    @Input() lat!: number;
    @Input() lon!: number;
    @Output() onReverse = new EventEmitter<string>();
    loading = false;
    calls = new Subject();

    constructor(private _apiService: ApiService) { }

    onClick(): void {
        this.loading = true;
        this.calls.next(true);
        this._apiService.reverse(this.lat, this.lon).pipe(
            takeUntil(this.calls)).subscribe({
                next: (data) => {
                    this.onReverse.emit(data.display_name);
                    this.loading = false;
                },
                error: (err) => {
                    console.log(err);
                    this.loading = false;
                }
            });
    }

    ngOnDestroy(): void {
        this.calls.unsubscribe();
    }
}