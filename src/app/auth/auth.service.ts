import { EventEmitter, Injectable } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from "../core/user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    onAuthenticated = new EventEmitter<void>();
    onLogout = new EventEmitter<void>();
    private _jwtHelperService: JwtHelperService;

    get isAuthenticated(): boolean {
        const t = localStorage.getItem("token");
        if (t)
            return true;
        else {
            return false;
        }
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

    constructor(private _userService: UserService) {
        this._jwtHelperService = new JwtHelperService();
    }

    login(token: string): void {
        this.token = token;
        this._userService.setUserInfo(this._jwtHelperService.decodeToken(token).email, this._jwtHelperService.decodeToken(token).sub);        
        this.onAuthenticated.emit();
    }

    logout(): void {
        localStorage.clear();
        this.onLogout.emit();
    }

    isTokenExpired(): boolean {
        return this._jwtHelperService.isTokenExpired(this.token);
    }
}