import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { EditUserInfoComponent } from "./edit-user-info/edit-user-info.component";
import { UserManagementComponent } from "./user-management.component";

const routes: Routes = [
    {
        path: '',
        component: UserManagementComponent,
        children: [
            {
                path: 'edit-user-info',
                component: EditUserInfoComponent
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent
            },
            {
                path: '',
                redirectTo: 'edit-user-info',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserManagementRoutingModule { }