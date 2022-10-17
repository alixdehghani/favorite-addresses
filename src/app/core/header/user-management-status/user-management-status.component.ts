import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Component({
    selector: 'app-header-user-management-status',
    templateUrl: 'user-management-status.component.html',
    styleUrls: ['user-management-status.component.scss']
})
export class UserManagementStatusComponent {    
    constructor(private _auth: AuthService, private readonly _router: Router) {}
    onLogout() {
        // this._apiService.logout().subscribe(
        //     {
        //         next: () => {
        //             this._auth.logout();
        //             this._router.navigateByUrl("/login");
        //         },
        //         error: () => {
        //             this._auth.logout();
        //             this._router.navigateByUrl("/login");
        //         }
        //     }
        // );
    }
    onUserManagementClick(): void {
        // this._router.navigate(['user-management']);
    }
}