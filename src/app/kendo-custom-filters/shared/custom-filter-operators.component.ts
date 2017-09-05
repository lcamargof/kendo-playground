import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-kendo-custom-filter-operators',
    template: `
        <kendo-dropdownlist [data]="data" 
                            textField="text" 
                            valueField="value"
                            [(ngModel)]="operator"
                            (valueChange)="valueChange($event)">
        </kendo-dropdownlist>
    `
})
export class KendoCustomFilterOperatorsComponent implements OnInit {
    @Input() type: string;
    @Input() default = 'eq';
    public operator: { text: string, value: string };
    @Output() operatorChange = new EventEmitter<{text: string, value: string}>();
    private operators: Array<{ text: string, value: string }> = [
        { text: 'Is equal to', value: 'eq' }, // all 0
        { text: 'Is not equal to', value: 'neq' }, // all 1
        { text: 'Contains', value: 'contains' }, // string 2
        { text: 'Does not contain', value: 'doesnotcontain' }, // string 3
        { text: 'Starts with', value: 'startswith' }, // string 4
        { text: 'Ends with', value: 'endswith' }, // string 5
        { text: 'Is null', value: 'isnull' }, // all 6
        { text: 'Is greater than or equal to', value: 'gte' }, // number7
        { text: 'Is greater than', value: 'gt' }, // number 8
        { text: 'Is less than or equal to', value: 'lte' }, // number 9
        { text: 'Is less than', value: 'lt' }, // number 10
        { text: 'Is after or equal to', value: 'gte' }, // date 11
        { text: 'Is after', value: 'gt' }, // date 12
        { text: 'Is before or equal to', value: 'lte' }, // date 13
        { text: 'Is before', value: 'lt' }, // date 14
        { text: 'Is True', value: 'true' }, // boolean 15
        { text: 'Is False', value: 'false' }, // boolean 16
        { text: '(All)', value: '' } // boolean 16
    ];
    public data: Array<{ text: string, value: string}>;

    ngOnInit() {
        switch (this.type) {
            case 'string':
                this.data = [
                    this.operators[0],
                    this.operators[1],
                    this.operators[2],
                    this.operators[3],
                    this.operators[4],
                    this.operators[5],
                    this.operators[6]
                ];
                break;
            case 'numeric':
                this.data = [
                    this.operators[0],
                    this.operators[1],
                    this.operators[7],
                    this.operators[8],
                    this.operators[9],
                    this.operators[10],
                    this.operators[6]
                ];
                break;
            case 'date':
                this.data = [
                    this.operators[0],
                    this.operators[1],
                    this.operators[11],
                    this.operators[12],
                    this.operators[13],
                    this.operators[14],
                    this.operators[6]
                ];
                break;
            case 'boolean':
                this.data = [
                    this.operators[17],
                    this.operators[15],
                    this.operators[16],
                ];
                break;
        }

        this.operator = this.data.find((operator) => operator.value === this.default);
    }

    public valueChange(event): void {
        this.operatorChange.emit(this.operator);
    }
}
