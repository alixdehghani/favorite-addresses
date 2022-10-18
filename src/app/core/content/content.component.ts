import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Component({
    selector: 'app-content',
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.scss']
})
export class ContentComponent implements OnInit {
    loadingRouteConfig!: boolean;
    constructor(
        private _authService: AuthService,
        private readonly _router: Router
    ) { }

    ngOnInit(): void {
       
    }

    onPublicFavoriteAddressesClicked(): void {
        this._router.navigate(['public-favorid-addresses']);
    }

}