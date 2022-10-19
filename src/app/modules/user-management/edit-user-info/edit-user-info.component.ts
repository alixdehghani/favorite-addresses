import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "src/app/core/user.service";
import { ApiService } from "./api.service";

@Component({
    selector: 'app-user-management-edit-user-info',
    templateUrl: 'edit-user-info.component.html',
    styleUrls: ['edit-user-info.component.scss'],
    providers: [ApiService]
})
export class EditUserInfoComponent {
    formGroup!: FormGroup;
    loading = false;
    error = '';
    constructor(private _apiService: ApiService, private _userService: UserService, private _snackBar: MatSnackBar) {
        this.formGroup = new FormGroup({
            id: new FormControl<number | null>(null),
            name: new FormControl<string | null>(''),
            email: new FormControl<string | null>('', [Validators.email]),
            phoneNumber: new FormControl<string | null>(''),
        })
    }

    ngOnInit(): void {
        this.loading = true;
        this._apiService.getUser(this._userService.id).subscribe({
            next: (data) => {
                this.formGroup.patchValue(data);
                this.loading = false;
            },
            error: (err) => {
                this.error = err?.error;
                this.loading = false;
            }
        })
    }

    onSubmit(): void {
        this.loading = true;
        this._apiService.editUser({
            id: +this._userService.id,
            name: this.formGroup.get('name')?.value,
            phoneNumber: this.formGroup.get('phoneNumber')?.value,
            email: this.formGroup.get('email')?.value
        }).subscribe({
            next: (data) => {
                this.formGroup.patchValue(data);
                this._snackBar.open('Change Submited',  'Close', { duration: 4000 });
                this._userService.setUserInfo(data.email, `${data.id}`)
                this.loading = false;
            },
            error: (err) => {
                this.error = err?.error;
                this.loading = false;
            }
        })
    }
}