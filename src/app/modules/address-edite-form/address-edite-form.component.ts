import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "./api.service";

@Component({
    selector: 'app-address-edite-form',
    templateUrl: 'address-edite-form.component.html',
    styleUrls: ['address-edite-form.component.scss'],
    providers: [ApiService]
})

export class AddressEditeFormComponent implements OnInit {
    loading = false;
    readonly formGroup: FormGroup;
    constructor(route: ActivatedRoute, private _apiService: ApiService, private _router: Router) {
        const routeParams = route.snapshot.paramMap;
        const id = Number(routeParams.get('id'));

        this.formGroup = new FormGroup({
            name: new FormControl<string | null>(null),
            address: new FormControl<string | null>(null),
            latitude: new FormControl<number | null>(null),
            longitude: new FormControl<number | null>(null)
        });
        this._apiService.init(id);
    }
    
    ngOnInit(): void {
        this.loading = true;
        this._apiService.getPublicAddressDetail().subscribe({
            next: (data) => {
                this.loading = false;
                this.formGroup.patchValue(data)
            },
            error: (err) => {  
                this.loading = false;              
            }
        })
    }

    onSubmit(): void {
        this.loading = true;
        this._apiService.EditPublicAddress(this.formGroup.value).subscribe({
            next: (data) => {
                console.log(data);
                this.formGroup.reset();
                this.formGroup.patchValue(data)
                this.loading = false;
            },
            error: (err) => {
                console.log(err);
                this.loading = false;
            }
        })
    }

    onDelete(): void {
        this.loading = true;
        this._apiService.deletePublicAddress().subscribe({
            next: (value) => {
                console.log(value);
                this._router.navigate(['']);
                this.loading = false;
            },
            error: (err) => {
                this.loading = false;
            }
        })
    }

}