import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddressEditeFormComponent } from "../address-edite-form/address-edite-form.component";
import { PublicFavoridAddressesComponent } from "./public-favorid-addresses.component";

const routes: Routes = [
    {
        path: '',
        component: PublicFavoridAddressesComponent,
        children: [
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            },
        ]
    },
    {path: 'edite/:id', loadChildren: () => import('../address-edite-form/address-edite-form.module').then(m => m.AddressEditeFormModule)},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PublicFavoridAddressesRoutingModule { }