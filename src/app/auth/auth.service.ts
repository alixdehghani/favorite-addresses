import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    onAuthenticated = new EventEmitter<void>();
    onLogout = new EventEmitter<void>();

    get token(): string {
        const t = localStorage.getItem("token");
        if (t)
            return t;
        else {
            return '';
        }
    }

    set token(value: string) {
        localStorage.setItem("token", value);
    }

    login(token: string) {
        this.token = token;
        
        this.onAuthenticated.emit();
    }

    logout() {
        localStorage.clear();
        this.onLogout.emit();
    }
}