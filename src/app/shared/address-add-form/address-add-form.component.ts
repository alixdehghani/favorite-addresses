import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { SearchGeocodingComponent } from "../search-geocoding/search-geocoding.component";
import { ReverseGeocodingComponent } from "../reverse-geocoding/reverse-geocoding.component";



@Component({
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        SearchGeocodingComponent,
        ReverseGeocodingComponent
    ],
    selector: 'app-address-add-form',
    templateUrl: 'address-add-form.component.html',
    styleUrls: ['address-add-form.component.scss'],
})
export class AddressAddFormComponent {
    readonly formGroup: FormGroup;
    reverseResult = '';
    constructor(public dialogRef: MatDialogRef<AddressAddFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.formGroup = new FormGroup({
            name: new FormControl<string | null>(null),
            address: new FormControl<string | null>(null),
            latitude: new FormControl<number | null>(null),
            longitude: new FormControl<number | null>(null)
        });
    }

    onSubmit(): void {
        this.dialogRef.close(this.formGroup.value);
    }

    onClose(): void {
        this.dialogRef.close();
    }
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