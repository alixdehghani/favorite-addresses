import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

import { LoginComponent } from "./login/login.component";
import { SigninRoutingModule } from "./signin-routing.module";
import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations: [
        SigninComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        SigninRoutingModule,
        HttpClientModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
})
export class SigninModule {}