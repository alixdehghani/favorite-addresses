import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatIconModule } from "@angular/material/icon";
import { AuthInterceptor } from "src/app/auth/auth.interceptor";
import { FavoridAddressCardModule } from "../favorid-address-card/favorid-address-card.module";
import { PrivateFavoridAddressesRoutingModule } from "./private-favorid-addresses-routing.module";
import { PrivateFavoridAddressesComponent } from "./private-favorid-addresses.component";
import { AddressAddFormComponent } from "src/app/shared/address-add-form/address-add-form.component";

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
        AddressAddFormComponent,
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