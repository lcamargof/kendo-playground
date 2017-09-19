import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
    KendoGridDetailTestComponent,
    KendoGridTestComponent
} from './kendo-grid/kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { CommonModule } from '@angular/common';
import { KendoCustomFiltersModule } from './kendo-custom-filters/kendo-custom-filters.module';
import { HealthStatusComponent } from './health-status/health-status.component';
import { HealthStatusServerComponent } from './health-status/server/health-status-server.component';
import { HealthStatusService } from './health-status/shared/health-status.service';

@NgModule({
    declarations: [
        AppComponent,
        KendoGridTestComponent,
        KendoGridDetailTestComponent,
        HealthStatusComponent,
        HealthStatusServerComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        GridModule,
        KendoCustomFiltersModule
    ],
    providers: [
        HealthStatusService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
