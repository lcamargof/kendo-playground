import { Component } from '@angular/core';
import { FilterService } from '@progress/kendo-angular-grid';
import { CustomFilterBaseComponent } from '../shared/custom-filter-base-component';

@Component({
    selector: 'app-custom-date-filter',
    styles: [`
        .mt-10 {
            margin-top: 10px;
        }
    `],
    template: `
        <div class="row">
            <div class="col-xs-12">
                <app-kendo-custom-filter-operators [default]="operator" type="date" (operatorChange)="changeOperator($event)">
                </app-kendo-custom-filter-operators>
                <kendo-datepicker class="mt-10" [(value)]="value"></kendo-datepicker>
                <hr>
                <app-custom-filter-actions (action)="setFilter($event)"></app-custom-filter-actions>
            </div>
        </div>
    `
})
export class CustomDateFilterComponent extends CustomFilterBaseComponent {
    readonly defaultValue = '';

    constructor(filterService: FilterService) {
        super(filterService);
    }
}
