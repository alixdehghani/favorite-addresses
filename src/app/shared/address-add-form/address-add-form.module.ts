import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { ReverseGeocodingModule } from "src/app/shared/reverse-geocoding/reverse-geocoding.module";
import { SearchGeocodingModule } from "src/app/shared/search-geocoding/search-geocoding.module";
import { AddressAddFormComponent } from "./address-add-form.component";

@NgModule({
    declarations: [AddressAddFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        SearchGeocodingModule,
        ReverseGeocodingModule
    ],
})
export class AddressAddFormModule {}