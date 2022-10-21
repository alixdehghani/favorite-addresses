import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddressEditeFormComponent } from "./address-edite-form.component";

const routes: Routes = [
    {
        path: '',
        component: AddressEditeFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AddressEditeFormRoutingModule { }