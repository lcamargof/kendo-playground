import { Component } from '@angular/core';
import { FilterService } from '@progress/kendo-angular-grid';
import { CustomFilterBaseComponent } from '../shared/custom-filter-base-component';

@Component({
    selector: 'app-custom-filesize-filter',
    styles: [`
        .mt-10 {
            margin-top: 10px;
        }
    `],
    template: `
        <div class="row">
            <div class="col-xs-12">
                <app-kendo-custom-filter-operators [default]="operator" type="numeric" (operatorChange)="changeOperator($event)">
                </app-kendo-custom-filter-operators>
                <kendo-numerictextbox class="mt-10" placeholder="" [(ngModel)]="size"></kendo-numerictextbox>
                <kendo-dropdownlist [data]="sizeTypes"
                                    class="mt-10"
                                    [(ngModel)]="sizeType">
                </kendo-dropdownlist>
                <hr>
                <app-custom-filter-actions (action)="setFilter($event)"></app-custom-filter-actions>
            </div>
        </div>
    `
})
export class CustomFileSizeFilterComponent extends CustomFilterBaseComponent {
    readonly defaultValue = '';

    public size = 0;
    public sizeTypes = ['BYTES', 'KB', 'MB', 'GB', 'TB'];
    public sizeType = this.sizeTypes[2];

    constructor(filterService: FilterService) {
        super(filterService);
    }

    public setFilter(action: boolean): void {
        this.value = `${this.size}_${this.operator}_${this.sizeType}`;

        super.setFilter(action);
    }

    setValue(value) {
        const values = value.split('_');
        this.size = values[0];
        this.sizeType = values[2];
    }
}
