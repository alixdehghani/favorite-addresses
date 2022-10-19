import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthInterceptor } from "src/app/auth/auth.interceptor";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { EditUserInfoComponent } from "./edit-user-info/edit-user-info.component";
import { UserManagementRoutingModule } from "./user-management-routing.module";
import { UserManagementComponent } from "./user-management.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    declarations: [UserManagementComponent, EditUserInfoComponent, ChangePasswordComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        UserManagementRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class UserManagementModule { }