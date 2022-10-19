import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { last } from "lodash-es";


@Component({
    selector: 'app-user-management',
    templateUrl: 'user-management.component.html',
    styleUrls: ['user-management.component.scss'],
})
export class UserManagementComponent{
    activeLink = 'edit-user-info';
    constructor(router: Router) {
        if (router.url) {            
            this.activeLink = last(router.url?.split('/'))!;
        }
    }
    
}