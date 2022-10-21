import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { AuthInterceptor } from "src/app/auth/auth.interceptor";
import { AddressAddFormModule } from "src/app/shared/address-add-form/address-add-form.module";
import { FavoridAddressCardModule } from "../favorid-address-card/favorid-address-card.module";
import { PrivateFavoridAddressesRoutingModule } from "./private-favorid-addresses-routing.module";
import { PrivateFavoridAddressesComponent } from "./private-favorid-addresses.component";

@NgModule({
    declarations: [PrivateFavoridAddressesComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        PrivateFavoridAddressesRoutingModule,
        FavoridAddressCardModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        AddressAddFormModule,
    ],
    exports: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class PrivateFavoridAddressesModule { }