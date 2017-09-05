import { Component, Input } from '@angular/core';
import { FilterService } from '@progress/kendo-angular-grid';
import { CustomFilterBaseComponent } from '../shared/custom-filter-base-component';

@Component({
    selector: 'app-custom-string-filter',
    styles: [`
        .mt-10 {
            margin-top: 10px; 
        }
    `],
    template: `
        <div class="row">
            <div class="col-xs-12">
                <app-kendo-custom-filter-operators [default]="operator" (operatorChange)="changeOperator($event)" type="string">
                </app-kendo-custom-filter-operators>
                <input class="k-textbox mt-10" placeholder="Filter value..." type="text" [(ngModel)]="value">
                <hr>
                <app-custom-filter-actions (action)="setFilter($event)"></app-custom-filter-actions>
            </div>
        </div>
    `
})
export class CustomStringFilterComponent extends CustomFilterBaseComponent {
    @Input() public operator = 'contains';
    readonly defaultValue = '';

    constructor(filterService: FilterService) {
        super(filterService);
    }
}
