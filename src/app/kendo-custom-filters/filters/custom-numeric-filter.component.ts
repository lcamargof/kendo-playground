import { Component } from '@angular/core';
import { FilterService } from '@progress/kendo-angular-grid';
import { CustomFilterBaseComponent } from '../shared/custom-filter-base-component';

@Component({
    selector: 'app-custom-numeric-filter',
    styles: [`
        .mt-10 {
            margin-top: 10px;
        }
    `],
    template: `
        <div class="row">
            <div class="col-xs-12">
                <app-kendo-custom-filter-operators [default]="operator" (operatorChange)="changeOperator($event)" type="numeric">
                </app-kendo-custom-filter-operators>
                <kendo-numerictextbox class="mt-10" [(ngModel)]="value"></kendo-numerictextbox>                
                <hr>
                <app-custom-filter-actions (action)="setFilter($event)"></app-custom-filter-actions>
            </div>
        </div>
    `
})
export class CustomNumericFilterComponent extends CustomFilterBaseComponent {
    readonly defaultValue = '';

    constructor(filterService: FilterService) {
        super(filterService);
    }
}
