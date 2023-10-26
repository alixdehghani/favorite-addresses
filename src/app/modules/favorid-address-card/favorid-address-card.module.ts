import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatIconModule } from "@angular/material/icon";
import { FavoridAddressCardComponent } from "./favorid-address-card.component";

@NgModule({
    declarations: [FavoridAddressCardComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [FavoridAddressCardComponent]
})
export class FavoridAddressCardModule {}