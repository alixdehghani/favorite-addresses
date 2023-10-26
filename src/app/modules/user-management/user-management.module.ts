import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyTabsModule as MatTabsModule } from "@angular/material/legacy-tabs";
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { AuthInterceptor } from "src/app/auth/auth.interceptor";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { EditUserInfoComponent } from "./edit-user-info/edit-user-info.component";
import { UserManagementRoutingModule } from "./user-management-routing.module";
import { UserManagementComponent } from "./user-management.component";
import { MatLegacySnackBarModule as MatSnackBarModule } from "@angular/material/legacy-snack-bar";

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