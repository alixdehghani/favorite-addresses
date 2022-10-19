import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
    {
        path: '',
        component: SigninComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'signup',
                component: SignupComponent
              },
              {
                path: 'login',
                component: LoginComponent
              },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SigninRoutingModule { }