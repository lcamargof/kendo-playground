// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// Kendo
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { PopupModule } from '@progress/kendo-angular-popup';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
// Components
import { CustomFilterComponent } from './custom-filter.component';
import { CustomFilterActionsComponent } from './shared/custom-filter-actions.component';
import { KendoCustomFilterOperatorsComponent } from './shared/custom-filter-operators.component';
import { CustomStringFilterComponent, CustomNumericFilterComponent, CustomDateFilterComponent,
    CustomBooleanFilterComponent } from './filters';
import { CustomFileSizeFilterComponent } from './filters/custom-filesize-filter.component';
import { CustomDateRangeFilterComponent } from './filters/custom-daterange-filter.component';
import { CustomMultiselectFilterComponent } from './filters/custom-multiselect-filter.component';


@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      GridModule,
      DropDownsModule,
      PopupModule,
      ButtonsModule,
      InputsModule,
      IntlModule,
      DateInputsModule
  ],
    exports: [
        CustomFilterComponent
    ],
  declarations: [
      CustomFilterComponent,
      CustomStringFilterComponent,
      CustomFilterActionsComponent,
      KendoCustomFilterOperatorsComponent,
      CustomNumericFilterComponent,
      CustomDateFilterComponent,
      CustomBooleanFilterComponent,
      CustomFileSizeFilterComponent,
      CustomDateRangeFilterComponent,
      CustomMultiselectFilterComponent
  ]
})
export class KendoCustomFiltersModule { }
