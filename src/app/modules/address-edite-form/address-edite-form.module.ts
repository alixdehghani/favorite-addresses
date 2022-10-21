import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { SearchGeocodingModule } from "src/app/shared/search-geocoding/search-geocoding.module";
import { AddressEditeFormRoutingModule } from "./address-edite-form-routing.module";
import { AddressEditeFormComponent } from "./address-edite-form.component";

@NgModule({
    declarations: [AddressEditeFormComponent],
    imports: [
        CommonModule,
        AddressEditeFormRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        SearchGeocodingModule
    ]
})
export class AddressEditeFormModule {}