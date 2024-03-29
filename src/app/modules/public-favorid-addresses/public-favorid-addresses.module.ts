import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatIconModule } from "@angular/material/icon";
import { FavoridAddressCardModule } from "../favorid-address-card/favorid-address-card.module";
import { PublicFavoridAddressesRoutingModule } from "./public-favorid-addresses-routing.module";
import { PublicFavoridAddressesComponent } from "./public-favorid-addresses.component";
import { AddressAddFormComponent } from "src/app/shared/address-add-form/address-add-form.component";

@NgModule({
    declarations: [PublicFavoridAddressesComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        PublicFavoridAddressesRoutingModule,
        FavoridAddressCardModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        AddressAddFormComponent,
    ],
    exports: []
})
export class PublicFavoridAddressesModule {}