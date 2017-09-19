import { Component, OnInit } from '@angular/core';
import { FilterService } from '@progress/kendo-angular-grid';
import { CustomFilterBaseComponent } from '../shared/custom-filter-base-component';

@Component({
    selector: 'app-custom-multiselect-filter',
    styles: [`
        .mt-10 {
            margin-top: 5px;
            width: 170px;
        }
        .mt-10:first-child {
            margin-top: 0;
        }
    `],
    template: `
        <div class="row">
            <div class="col-xs-12">
                <div class="mt-10" *ngFor="let item of data; let i = index">
                    <input type="checkbox" 
                           #checkbox
                           id="checkbox-{{index}}-{{i}}"
                           8d(checkbox, item.value, index)"
                           class="k-checkbox" (click)="onChange($event, item.value)">
                    <label for="checkbox{{i}}" class="k-checkbox-label">{{ item.label }}</label>
                </div>
                <hr>
                <app-custom-filter-actions (action)="setFilter($event)"></app-custom-filter-actions>
            </div>
        </div>
    `
})
export class CustomMultiselectFilterComponent extends CustomFilterBaseComponent implements OnInit {
    data: Array<{ label: string, value: string }>;
    selected: any;
    multiple = true;

    public defaultValue = '';

    constructor(filterService: FilterService) {
        super(filterService);
    }

    ngOnInit() {
        super.ngOnInit();

        // Take data if not fetch it with the datasource
        if (this.options.data) {
            this.data = this.options.data;
        } else if (this.options.dataSource) {
            // TODO: Fetch
        }

        if (this.options.multiple === false) {
            this.multiple = false;
            this.selected = '';
        } else {
            if (this.value) {
                this.selected = this.value;
            } else {
                this.selected = [];
            }
        }
    }

    isSelected(event, value, index) {
        if (this.multiple) {
            return this.selected.indexOf(value) !== -1;
        } else {
            return this.selected === value;
        }
    }

    onChange(event, value) {
        if (this.multiple) {
            const index = this.selected.indexOf(value);

            if (index !== -1) {
                this.selected.splice(index, 1);
                setTimeout(() => {
                    event.target.checked = false;
                });
            } else {
                this.selected.push(value);
                setTimeout(() => {
                    event.target.checked = true;
                });
            }

            this.value = [...this.selected];
        } else {
            this.value = value;
        }
    }
}
