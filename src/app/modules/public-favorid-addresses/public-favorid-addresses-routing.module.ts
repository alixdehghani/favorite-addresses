import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicFavoridAddressesComponent } from "./public-favorid-addresses.component";

const routes: Routes = [
    {
        path: '',
        component: PublicFavoridAddressesComponent,
    },
    {
        path: 'edite/:id',
        loadChildren: () => import('../public-addresses-edit-form-page/public-addresses-edit-form-page.module')
            .then(m => m.PublicAddressesEditeFormPageModule)},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PublicFavoridAddressesRoutingModule { }