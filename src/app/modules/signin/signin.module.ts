import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';

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