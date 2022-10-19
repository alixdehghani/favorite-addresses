import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptor } from "src/app/auth/auth.interceptor";
import { PrivateFavoridAddressesComponent } from "./private-favorid-addresses.component";

@NgModule({
    declarations: [PrivateFavoridAddressesComponent],
    imports: [],
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