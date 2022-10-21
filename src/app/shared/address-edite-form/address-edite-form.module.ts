import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
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
    ]
})
export class AddressEditeFormModule {}