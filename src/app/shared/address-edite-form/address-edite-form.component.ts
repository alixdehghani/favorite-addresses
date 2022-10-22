import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";


@Component({
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