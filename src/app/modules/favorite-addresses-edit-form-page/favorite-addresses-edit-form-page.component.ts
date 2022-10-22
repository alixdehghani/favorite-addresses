import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/core/user.service";
import { ApiService } from "./api.service";

@Component({
    selector: 'app-favorite-addresses-edit-form-page',
    templateUrl: 'favorite-addresses-edit-form-page.component.html',
    styleUrls: ['favorite-addresses-edit-form-page.component.scss'],
    providers: [ApiService]
})
export class FavoriteAddressesEditeFormPageComponent implements OnInit {
    loading = false;
    readonly formGroup: FormGroup;
    reverseResult = ''
    constructor(route: ActivatedRoute, private _apiService: ApiService, private _router: Router, private _userService: UserService) {
        const routeParams = route.snapshot.paramMap;
        const id = Number(routeParams.get('id'));

        this.formGroup = new FormGroup({
            userId: new FormControl<string | null>(null),
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
                this.formGroup.patchValue(data);
            },
            error: (err) => {
                this.loading = false;
            }
        });
    }

    onSubmit(): void {
        this.loading = true;
        this.formGroup.get('userId')?.setValue(this._userService.id);
        this._apiService.EditPublicAddress(this.formGroup.value).subscribe({
            next: (data) => {
                console.log(data);
                this.formGroup.reset();
                this.formGroup.patchValue(data);
                this.loading = false;
            },
            error: (err) => {
                console.log(err);
                this.loading = false;
            }
        });
    }

    onDelete(): void {
        this.loading = true;
        this._apiService.deletePublicAddress().subscribe({
            next: (value) => {
                this._router.navigate(['/private-favorid-addresses/']);
                this.loading = false;
            },
            error: (err) => {
                this.loading = false;
            }
        });
    }
}