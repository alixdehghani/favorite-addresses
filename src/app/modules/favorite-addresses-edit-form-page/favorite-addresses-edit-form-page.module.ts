import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { AuthInterceptor } from "src/app/auth/auth.interceptor";
import { FavoriteAddressesEditeFormPageRoutingModule } from "./favorite-addresses-edit-form-page-routing.module";
import { FavoriteAddressesEditeFormPageComponent } from "./favorite-addresses-edit-form-page.component";
import { AddressEditeFormComponent } from "src/app/shared/address-edite-form/address-edite-form.component";

@NgModule({
    declarations: [FavoriteAddressesEditeFormPageComponent],
    imports: [
        CommonModule,
        MatCardModule,
        FavoriteAddressesEditeFormPageRoutingModule,
        AddressEditeFormComponent,
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