import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuardService implements CanActivate {

    constructor(private _auth: AuthService, private _router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {        
        return this._auth.loggedIn$.pipe(tap(res => {
            if (!res) {
                this._router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});
            }
        }));
    }
}