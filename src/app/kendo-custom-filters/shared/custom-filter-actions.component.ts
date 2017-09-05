import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-custom-filter-actions',
    template: `
        <kendo-buttongroup [width]="'100%'">
            <button kendoButton [icon]="'filter'" (click)="onAction(true)">Filter</button>
            <button kendoButton [icon]="'filter-clear'" (click)="onAction(false)">Clear</button>
        </kendo-buttongroup>
    `
})
export class CustomFilterActionsComponent {
    @Output() action = new EventEmitter<boolean>();

    public onAction(action: boolean): void {
        this.action.emit(action);
    }
}
