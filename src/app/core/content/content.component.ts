import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { last } from "lodash-es";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Component({
    selector: 'app-content',
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.scss']
})
export class ContentComponent implements OnInit {
    loadingRouteConfig!: boolean;
    activeLink = 'public-favorid-addresses';
    private _subscription!: Subscription;

    constructor(
        public authService: AuthService,
        public router: Router
    ) {
        if (router.url) {            
            this.activeLink = last(router.url?.split('/'))!;
        }
    }

    ngOnInit(): void {
        this.activeLink = last(this.router.url?.split('/'))!;
        this._subscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.activeLink = last(this.router.url?.split('/'))!;                
            }
        });
    }

    ngOnDestroy(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }

}