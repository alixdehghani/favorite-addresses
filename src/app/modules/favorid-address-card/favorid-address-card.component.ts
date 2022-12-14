import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-favorid-address-card',
    templateUrl: 'favorid-address-card.component.html',
    styleUrls: ['favorid-address-card.component.scss']
})
export class FavoridAddressCardComponent {
    @Input() id!: number;
    @Input() address!: string;
    @Input() lat!: number;
    @Input() long!: number;
    @Input() name!: string;

    @Output() onEditClick = new EventEmitter<number>();

    onEditClicked() {
        this.onEditClick.emit(this.id);
    }
}