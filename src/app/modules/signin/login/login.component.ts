import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { ApiService } from "./api-service";
import { LoginInterface } from "./login.interface";

@Component({
    selector: 'app-sigin-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    providers: [ApiService]
})

export class LoginComponent {
    formGroup: FormGroup;
    loading = false;
    error!: string;

    constructor(
        private readonly _apiService: ApiService,
        private readonly _auth: AuthService,
        private _router: Router,
    ) {
        this.formGroup = new FormGroup({
            email: new FormControl<string | null>('', [Validators.required, Validators.email]),
            password: new FormControl<string | null>('', [Validators.required, Validators.minLength(6)])
        });
    }
    onSubmit() {
        this.loading = true;
        this.error = '';
        this._apiService.login(this.formGroup.value).subscribe({
            next: (data) => {
                this._auth.login(data.accessToken);
                this._router.navigateByUrl('/');
                this.loading = false;
            },
            error: (err) => {
                this.error = err?.error;
                this.loading = false;
            }
        });
    }
}