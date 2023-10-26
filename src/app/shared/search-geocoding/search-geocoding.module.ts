import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchGeocodingComponent } from "./search-geocoding.component";
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from "@angular/material/legacy-autocomplete"
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./api.service";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [SearchGeocodingComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatIconModule
    ],
    providers: [ApiService],
    exports: [SearchGeocodingComponent]
})
export class SearchGeocodingModule {}