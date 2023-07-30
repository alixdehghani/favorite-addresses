import { EventEmitter, Injectable } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Auth, UserCredential, signInWithEmailAndPassword } from "@angular/fire/auth";
import { Observable, from, tap } from "rxjs";
import { UserService } from "../core/user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    onAuthenticated = new EventEmitter<void>();
    onLogout = new EventEmitter<void>();
    private _jwtHelperService: JwtHelperService;
    user!: UserCredential;
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

    constructor(private _userService: UserService, private _auth: Auth) {
        this._jwtHelperService = new JwtHelperService();
    }

    login(token: string): void {
        this.token = token;
        this._userService.setUserInfo(this.user.user.email, this.user.user.uid);        
        this.onAuthenticated.emit();
    }

    loginWithfb(username: string, password: string): Observable<UserCredential> {
        return from(signInWithEmailAndPassword(this._auth, username, password)).pipe(tap(res => {
            debugger    
            this.user = res;
            res.user.getIdToken().then(t => {
                console.log(this._jwtHelperService.decodeToken(t));
                this.login(t)
            })
        }));
    }

    private _logout(): void {
        localStorage.clear();
        this.onLogout.emit();
    }

    logoutFb(): Observable<void> {
        return from(this._auth.signOut()).pipe(tap(() => this._logout()));
    }

    isTokenExpired(): boolean {
        return this._jwtHelperService.isTokenExpired(this.token);
    }
}