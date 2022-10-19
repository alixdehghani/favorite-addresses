import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { UserService } from "../../user.service";

@Component({
    selector: 'app-header-user-management-status',
    templateUrl: 'user-management-status.component.html',
    styleUrls: ['user-management-status.component.scss']
})
export class UserManagementStatusComponent implements AfterViewInit, OnDestroy {
    username = 'Guest';
    @ViewChild('Guest') private _guestTemplate!: TemplateRef<any>;
    @ViewChild('AuthenticatedUser') private _authenticatedUserTemplate!: TemplateRef<any>;
    private _subscription1!: Subscription;
    private _subscription2!: Subscription;
    footerTemplate!: TemplateRef<any>;
    constructor(private readonly _router: Router, private _authService: AuthService, private _userService: UserService) { }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this._authService.isAuthenticated) {
                this.username = this._userService.email;
                this.footerTemplate = this._authenticatedUserTemplate;
            } else {
                this.username = 'Guest';
                this.footerTemplate = this._guestTemplate;
            }
            this._subscription1 = this._authService.onAuthenticated.subscribe(() => {
                this.username = this._userService.email;
                this.footerTemplate = this._authenticatedUserTemplate;
            });

            this._subscription2 = this._authService.onLogout.subscribe(() => {
                this.username = 'Guest';
                this.footerTemplate = this._guestTemplate;
            });
        });
    }

    onLogout(): void {
        this._authService.logout();
        this._router.navigate(['']);
    }

    onUserManagementClick(): void {
        this._router.navigate(['user-management']);
    }

    onsigin(): void {
        this._router.navigate(['signin']);
    }

    ngOnDestroy(): void {
        if (this._subscription1 && this._subscription2) {
            this._subscription1.unsubscribe();
            this._subscription2.unsubscribe();
        }
    }
}