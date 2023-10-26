import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatIconModule } from "@angular/material/icon";
import { ApiService } from "./api.service";
import { ReverseGeocodingComponent } from "./reverse-geocoding.component";

@NgModule({
    declarations: [ReverseGeocodingComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [ApiService],
    exports: [ReverseGeocodingComponent]
})
export class ReverseGeocodingModule {}