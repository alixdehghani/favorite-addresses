import { EventEmitter, Injectable } from "@angular/core";
import { Auth, UserCredential, signInWithEmailAndPassword } from "@angular/fire/auth";
import { BehaviorSubject, Observable, from, tap } from "rxjs";
import { UserService } from "../core/user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _loggedIn = new BehaviorSubject<boolean>(false);
    loggedIn$!: Observable<boolean>
    constructor(private _userService: UserService, private _auth: Auth) {
        this.loggedIn$ = this._loggedIn.asObservable();
        this._auth.onAuthStateChanged(user => {            
            if (user) {
                this._userService.setUserInfo(user.email, user.uid)
                this._loggedIn.next(true);
            } else {
                this._loggedIn.next(false);
                this._logout();
            }
        })
    }
    loginWithFirebase(username: string, password: string): Observable<UserCredential> {
        return from(signInWithEmailAndPassword(this._auth, username, password));
    }    
    logoutFirebase(): Observable<void> {
        return from(this._auth.signOut()).pipe(tap(() => localStorage.clear()));
    }
    private _logout(): void {
        localStorage.clear();
    }
}