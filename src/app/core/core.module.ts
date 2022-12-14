import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";
import { UserManagementStatusComponent } from "./header/user-management-status/user-management-status.component";
import { ContentComponent } from "./content/content.component";
import { MatTabsModule } from "@angular/material/tabs";

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