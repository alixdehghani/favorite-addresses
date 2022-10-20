import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
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
        MatIconModule
    ],
    exports: []
})
export class PublicFavoridAddressesModule {}