import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { AddressAddFormModule } from "src/app/shared/address-add-form/address-add-form.module";
import { FavoridAddressCardModule } from "../favorid-address-card/favorid-address-card.module";
import { PublicFavoridAddressesRoutingModule } from "./public-favorid-addresses-routing.module";
import { PublicFavoridAddressesComponent } from "./public-favorid-addresses.component";

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
        AddressAddFormModule,
    ],
    exports: []
})
export class PublicFavoridAddressesModule {}