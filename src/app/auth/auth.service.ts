import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    onAuthenticated = new EventEmitter<void>();
    onLogout = new EventEmitter<void>();

    private _isAuthenticated = false;
    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    get token(): string {
        const t = localStorage.getItem("token");
        if (t)
            return t;
        else {
            return '';
        }
    }

    private set token(value: string) {
        localStorage.setItem("token", value);
    }

    login(token: string): void {
        this.token = token;
        this.onAuthenticated.emit();
        this._isAuthenticated = true;
    }

    logout(): void {
        localStorage.clear();
        this.onLogout.emit();
        this._isAuthenticated = true;
    }
}