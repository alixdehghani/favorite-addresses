import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { UserService } from "src/app/core/user.service";
import { ApiService } from "./api.service";

@Component({
    selector: 'app-user-management-change-password',
    templateUrl: 'change-password.component.html',
    styleUrls: ['change-password.component.scss'],
    providers: [ApiService]
})
export class ChangePasswordComponent {
    formGroup!: FormGroup;
    loading = false;
    error = '';
    constructor(private _apiService: ApiService, private _userService: UserService, private _snackBar: MatSnackBar) {
        this.formGroup = new FormGroup({
            id: new FormControl<number | null>(null),
            password: new FormControl<string | null>('', [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl<string | null>('', [Validators.required, Validators.minLength(6)]),
        }, { validators: this._checkPasswords });
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.loading = true;
        this._apiService.changePasswprd({
            id: +this._userService.id,
            password: this.formGroup.get('password')?.value
        }).subscribe({
            next: (data) => {
                this.formGroup.patchValue(data);
                this._snackBar.open('Password Changed.',  'Close', { duration: 4000 });
                this.formGroup.reset();
                this.loading = false;
            },
            error: (err) => {
                this.error = err?.error;
                this.loading = false;
            }
        })
    }
    private _checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        return group.get('password')?.value != group.get('confirmPassword')?.value ? { "notSame": true } : null;
    };
}