import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicAddressesEditeFormPageComponent } from "./public-addresses-edit-form-page.component";

const routes: Routes = [
    {
        path: '',
        component: PublicAddressesEditeFormPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PublicAddressesEditeFormPageRoutingModule { }