import { BaseFilterCellComponent, ColumnComponent, FilterService } from '@progress/kendo-angular-grid';
import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query/dist/npm/filtering/filter-descriptor.interface';

export class CustomFilterBaseComponent extends BaseFilterCellComponent implements OnInit {
    /**
     * The current root filter.
     * @type {CompositeFilterDescriptor}
     */
    @Input() public filter: CompositeFilterDescriptor;
    /**
     * The options for the selected filter.
     * @type {any}
     */
    @Input() public options: any;
    /**
     * The column with which the filter is associated.
     * @type {ColumnComponent}
     */
    @Input() public column: ColumnComponent;
    /**
     * The default filter operator. Defaults to `contains`.
     * @type {string}
     */
    @Input() public operator = 'eq';
    @Input() public index: number;
    /**
     * The default filter value.
     * @type {string}
     */
    @Input() public value: any;
    /**
     * Default value of the filter .
     * @type {any}
     */
    public defaultValue;
    /**
     * Event emitter to notify if the filter is set or not .
     * @type {EventEmitter<bolean>}
     */
    @Output() public onAction = new EventEmitter<boolean>();

    // Send the filter service and set default value
    constructor(filterService: FilterService) {
        super(filterService);
    }

    ngOnInit() {
        this.setDefaultFilterValue();
    }

    // Set Filter Method
    public setFilter(action: boolean): void {
        // Apply or clear the filter
        this.applyFilter(
            !action ?
                this.clearFilter(this.column.field) : // remove the filter
                this.updateFilter({ // add/modify the filter for the field
                    field: this.column.field,
                    operator: this.operator,
                    value: this.value
                })
        ); // And update the root filter

        // Notify the parent component the status of the filter
        this.onAction.emit(action);
    }

    // Set default value and avoid mutation
    private setDefaultFilterValue(cleared = false) {
        const currentFilter: any = this.filter.filters.find((filter: any) => filter.field === this.column.field);

        if (currentFilter && !cleared) {
            this.value = currentFilter.value;
            this.operator = currentFilter.operator;
            this.setValue(currentFilter.value);
        } else {
            this.value = this.defaultValue;
        }
    }

    // Clear filter wrapper (default value and clear)
    private clearFilter(field: string) {
        this.setDefaultFilterValue(true);
        return this.removeFilter(field);
    }

    public changeOperator(operator) {
        this.operator = operator.value;
    }

    public setValue(value) { }
}
