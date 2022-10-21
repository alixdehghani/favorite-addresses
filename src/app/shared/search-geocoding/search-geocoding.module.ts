import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchGeocodingComponent } from "./search-geocoding.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./api.service";

@NgModule({
    declarations: [SearchGeocodingComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatAutocompleteModule,
        MatFormFieldModule
    ],
    providers: [ApiService],
    exports: [SearchGeocodingComponent]
})
export class SearchGeocodingModule {}