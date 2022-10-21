import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'app-address-add-form',
    templateUrl: 'address-add-form.component.html',
    styleUrls: ['address-add-form.component.scss']
})
export class AddressAddFormComponent {
    readonly formGroup: FormGroup;
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
}