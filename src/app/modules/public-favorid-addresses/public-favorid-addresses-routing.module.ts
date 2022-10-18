import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PublicFavoridAddressesRoutingModule { }