import { Component } from '@angular/core';
import { FilterService } from '@progress/kendo-angular-grid';
import { CustomFilterBaseComponent } from '../shared/custom-filter-base-component';

@Component({
    selector: 'app-custom-boolean-filter',
    styles: [`
        .mt-10 {
            margin-top: 10px;
        }
    `],
    template: `
        <div class="row">
            <div class="col-xs-12">
                <kendo-dropdownlist [data]="data"
                                    style="width: 170px"
                                    textField="text"
                                    valueField="value"
                                    [valuePrimitive]="true"
                                    [(ngModel)]="value">
                </kendo-dropdownlist>
                <hr>
                <app-custom-filter-actions (action)="setFilter($event)"></app-custom-filter-actions>
            </div>
        </div>
    `
})
export class CustomBooleanFilterComponent extends CustomFilterBaseComponent {
    data = [
        { text: '(All)', value: 'all' },
        { text: 'Is True', value: 'true' },
        { text: 'Is False', value: 'false' }
    ];

    public defaultValue = 'all';

    constructor(filterService: FilterService) {
        super(filterService);
    }
}
