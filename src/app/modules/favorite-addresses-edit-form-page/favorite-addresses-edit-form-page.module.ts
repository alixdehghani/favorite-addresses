import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { AuthInterceptor } from "src/app/auth/auth.interceptor";
import { AddressEditeFormModule } from "src/app/shared/address-edite-form/address-edite-form.module";
import { FavoriteAddressesEditeFormPageRoutingModule } from "./favorite-addresses-edit-form-page-routing.module";
import { FavoriteAddressesEditeFormPageComponent } from "./favorite-addresses-edit-form-page.component";

@NgModule({
    declarations: [FavoriteAddressesEditeFormPageComponent],
    imports: [
        CommonModule,
        MatCardModule,
        FavoriteAddressesEditeFormPageRoutingModule,
        AddressEditeFormModule,
        MatButtonModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class PublicAddressesEditeFormPageModule {}