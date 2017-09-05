import {
    Component,
    OnInit, ViewChild
} from '@angular/core';

interface KendoGridColumn {
  field: string;
  filter: string;
  title: string;
  options?: any;
};

@Component({
    selector: 'app-kendo-grid-test',
    template: `
        <kendo-grid #grid (filterChange)="filterChange($event)" [data]="result" [filter]="filter">
            <kendo-grid-column *ngFor="let c of columns; let i = index;" [field]="c.field" [title]="c.title">
                <ng-template kendoGridHeaderTemplate let-column>
                    <app-kendo-grid-custom-filter [filter]="grid.filter"
                                                  [index]="i"
                                                  [column]="column" [type]="c.filter" [options]="c.options || {}">
                    </app-kendo-grid-custom-filter>
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class KendoGridTestComponent implements OnInit {
    filter = {
        filters: [],
        logic: 'and'
    };

    columns: KendoGridColumn[] = [
        { field: 'name', title: 'Name', filter: 'string' },
        { field: 'type', title: 'Type', filter: 'multiselect', options: {
            data: [
                { label: 'test', value: 'test' },
                { label: 'another test', value: 'another' }
            ]
        }},
        { field: 'type', title: 'Type', filter: 'multiselect', options: {
            data: [
                { label: 'test', value: 'test' },
                { label: 'another test', value: 'another' }
            ]
        }},
        { field: 'type', title: 'Type', filter: 'multiselect', options: {
            data: [
                { label: 'test', value: 'test' },
                { label: 'another test', value: 'another' }
            ]
        }},
    ];

    result = {
        data: [
            { name: 'Luis Camargo', age: 21, date: '1993-04-03', type: 'test1', available: true, size: '1gb', range: '1993-04-03' },
            { name: 'Pedro Camargo', age: 37, date: '1985-06-25', type: 'test2', available: false, size: '1tb', range: '1985-06-25' },
            { name: 'Test Name', age: 50, date: '1959-03-21', type: 'test3', available: true, size: '5gb', range: '1959-03-21' }
        ],
        total: 3
    };

    constructor() {
    }

    ngOnInit() {
    }

    filterChange(event) {
        console.log('filter change', event);
    }
}
