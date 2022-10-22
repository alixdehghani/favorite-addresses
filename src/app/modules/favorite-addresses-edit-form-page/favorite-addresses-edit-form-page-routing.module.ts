import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoriteAddressesEditeFormPageComponent } from "./favorite-addresses-edit-form-page.component";

const routes: Routes = [
    {
        path: '',
        component: FavoriteAddressesEditeFormPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FavoriteAddressesEditeFormPageRoutingModule { }