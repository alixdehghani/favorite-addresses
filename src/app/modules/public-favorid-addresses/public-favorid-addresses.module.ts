import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PublicFavoridAddressesRoutingModule } from "./public-favorid-addresses-routing.module";
import { PublicFavoridAddressesComponent } from "./public-favorid-addresses.component";

@NgModule({
    declarations: [PublicFavoridAddressesComponent],
    imports: [PublicFavoridAddressesRoutingModule, HttpClientModule],
    exports: []
})
export class PublicFavoridAddressesModule {}