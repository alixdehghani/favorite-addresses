import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
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