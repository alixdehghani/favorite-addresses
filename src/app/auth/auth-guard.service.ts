import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuardService implements CanActivate {

    constructor(private _auth: AuthService, private _router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this._auth.isAuthenticated) {           
            this._router.navigate([''], { queryParams: { returnUrl: state.url }});
            return false;
        }
        return true;
    }
}