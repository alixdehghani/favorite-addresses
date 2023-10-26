import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
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