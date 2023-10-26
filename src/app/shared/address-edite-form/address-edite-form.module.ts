import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { ReverseGeocodingModule } from "src/app/shared/reverse-geocoding/reverse-geocoding.module";
import { SearchGeocodingModule } from "src/app/shared/search-geocoding/search-geocoding.module";
import { AddressEditeFormComponent } from "./address-edite-form.component";

@NgModule({
    declarations: [AddressEditeFormComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        SearchGeocodingModule,
        ReverseGeocodingModule
    ],
    exports: [AddressEditeFormComponent]
})
export class AddressEditeFormModule {}