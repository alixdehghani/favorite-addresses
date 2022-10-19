import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { ApiService } from "./api.service";

@Component({
    selector: 'app-sigin-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.scss'],
    providers: [ApiService]
})

export class SignupComponent {
    formGroup: FormGroup;
    loading = false;
    error!: string;

    constructor(
        private readonly _apiService: ApiService,
        private readonly _auth: AuthService,
        private _router: Router,
    ) {
        this.formGroup = new FormGroup({
            name: new FormControl<string | null>('', [Validators.required]),
            email: new FormControl<string | null>('', [Validators.required, Validators.email]),
            password: new FormControl<string | null>('', [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl<string | null>('', [Validators.required, Validators.minLength(6)]),
            phoneNumber: new FormControl<string | null>('', [Validators.required]),
        }, { validators: this._checkPasswords });
    }

    onSubmit() {
        this.loading = true;
        this.error = '';
        this._apiService.register({
            name: this.formGroup.get('name')?.value,
            email: this.formGroup.get('email')?.value,
            password: this.formGroup.get('password')?.value,
            phoneNumber: this.formGroup.get('phoneNumber')?.value
        }).subscribe({
            next: (data) => {
                this.loading = false;
                this._auth.login(data.accessToken);
                this._router.navigateByUrl("/");
            },
            error: (err) => {
                this.error = err?.error;
                this.loading = false;
            },
            complete: () => {
                this.loading = false;
            },
        }
        );
    }
    private _checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        return group.get('password')?.value != group.get('confirmPassword')?.value ? { "notSame": true } : null;
    };
}