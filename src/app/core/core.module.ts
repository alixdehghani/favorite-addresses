import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from "@angular/material/legacy-progress-spinner";
import { MatLegacySlideToggleModule as MatSlideToggleModule } from "@angular/material/legacy-slide-toggle";
import { MatLegacyTooltipModule as MatTooltipModule } from "@angular/material/legacy-tooltip";
import { UserManagementStatusComponent } from "./header/user-management-status/user-management-status.component";
import { ContentComponent } from "./content/content.component";
import { MatLegacyTabsModule as MatTabsModule } from "@angular/material/legacy-tabs";

@NgModule({
    declarations: [
        HeaderComponent,
        UserManagementStatusComponent,
        ContentComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatTabsModule
    ],
    exports: [
        HeaderComponent,
        ContentComponent
    ]
})
export class CoreModule {}