import { Component } from '@angular/core';
import { FilterService } from '@progress/kendo-angular-grid';
import { CustomFilterBaseComponent } from '../shared/custom-filter-base-component';

@Component({
    selector: 'app-custom-daterange-filter',
    styles: [`
        .mt-10 {
            margin-top: 10px;
        }
    `],
    template: `
        <div class="row">
            <div class="col-xs-12">
                From
                <kendo-datepicker [(value)]="from" (valueChange)="dateChange()"></kendo-datepicker>
                <div class="mt-10">To</div>
                <kendo-datepicker [(value)]="to" (valueChange)="dateChange()"></kendo-datepicker>
                <hr>
                <app-custom-filter-actions (action)="setFilter($event)"></app-custom-filter-actions>
            </div>
        </div>
    `
})
export class CustomDateRangeFilterComponent extends CustomFilterBaseComponent {
    readonly defaultValue = '';
    public from: any = '';
    public to: any = '';

    constructor(filterService: FilterService) {
        super(filterService);
        this.operator = 'daterange';
    }

    dateChange() {
        if (!this.from && this.to) {
            this.from = this.to;
        } else if (this.from && !this.to) {
            this.to = this.from;
        }

        this.value = this.from + '_' + this.to;
    }

    setValue(value) {
        const dates = value.split('_');
        this.from = new Date(dates[0]);
        this.to = new Date(dates[1]);
    }
}
