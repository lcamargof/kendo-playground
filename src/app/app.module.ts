import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HealthStatusComponent } from './health-status/health-status.component';
import {
    KendoGridDetailTestComponent,
    KendoGridTestComponent
} from './kendo-grid/kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { CommonModule } from '@angular/common';
import { KendoCustomFiltersModule } from './kendo-custom-filters/kendo-custom-filters.module';
import { HealthComponent, HealthItemComponent } from './health/health.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthStatusComponent,
    KendoGridTestComponent,
      KendoGridDetailTestComponent,
      HealthComponent,
      HealthItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    GridModule,
    KendoCustomFiltersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
