import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { PublicAddressesEditeFormPageRoutingModule } from "./public-addresses-edit-form-page-routing.module";
import { PublicAddressesEditeFormPageComponent} from "./public-addresses-edit-form-page.component";
import { AddressEditeFormComponent } from "src/app/shared/address-edite-form/address-edite-form.component";

@NgModule({
    declarations: [PublicAddressesEditeFormPageComponent],
    imports: [
        CommonModule,
        MatCardModule,
        PublicAddressesEditeFormPageRoutingModule,
        AddressEditeFormComponent,
        MatButtonModule
    ]
})
export class PublicAddressesEditeFormPageModule {}