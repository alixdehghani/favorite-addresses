import { Component, OnDestroy } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { last } from "lodash-es";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-user-management',
    templateUrl: 'user-management.component.html',
    styleUrls: ['user-management.component.scss'],
})
export class UserManagementComponent implements OnDestroy {
    activeLink = 'edit-user-info';
    private readonly _subscription: Subscription;
    constructor(router: Router) {
        if (router.url) {            
            this.activeLink = last(router.url?.split('/'))!;
        }
        this._subscription = router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.activeLink = last(router.url?.split('/'))!;                
            }
        });
    }

    ngOnDestroy(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}