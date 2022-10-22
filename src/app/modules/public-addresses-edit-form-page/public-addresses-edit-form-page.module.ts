import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { AddressEditeFormModule } from "src/app/shared/address-edite-form/address-edite-form.module";
import { PublicAddressesEditeFormPageRoutingModule } from "./public-addresses-edit-form-page-routing.module";
import { PublicAddressesEditeFormPageComponent} from "./public-addresses-edit-form-page.component";

@NgModule({
    declarations: [PublicAddressesEditeFormPageComponent],
    imports: [
        CommonModule,
        MatCardModule,
        PublicAddressesEditeFormPageRoutingModule,
        AddressEditeFormModule,
        MatButtonModule
    ]
})
export class PublicAddressesEditeFormPageModule {}