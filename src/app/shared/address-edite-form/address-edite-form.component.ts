import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { ReverseGeocodingComponent } from "../reverse-geocoding/reverse-geocoding.component";
import { SearchGeocodingComponent } from "../search-geocoding/search-geocoding.component";


@Component({
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        SearchGeocodingComponent,
        ReverseGeocodingComponent
    ],
    selector: 'app-address-edite-form',
    templateUrl: 'address-edite-form.component.html',
    styleUrls: ['address-edite-form.component.scss'],
})

export class AddressEditeFormComponent {
    @Input() formGroup!: FormGroup;
    reverseResult = '';

    get addressControl(): FormControl {
        return this.formGroup.get('address') as FormControl;
    }

    get latControl(): FormControl {
        return this.formGroup.get('latitude') as FormControl;
    }

    get longsControl(): FormControl {
        return this.formGroup.get('longitude') as FormControl;
    }

    get latValue(): number {
        return +this.latControl.value;
    }

    get lonValue(): number {
        return +this.longsControl.value;
    }
}