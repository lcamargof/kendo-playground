import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnComponent } from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-kendo-grid-custom-filter',
    templateUrl: 'custom-filter.component.html',
    styles: [`
        .content {
            padding: 15px !important;
            background-color: #fff;
            border: 1px solid rgba(0,0,0,.05);
        }
        
        .selected {
            background-color: #cccccc;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class CustomFilterComponent {
    @Input() showTitle = true;
    @Input() filter: any;
    @Input() column: ColumnComponent;
    @Input() options = {};
    @Input() public index: number;
    @Input() type = 'string';
    public show = false;
    public filtered = false;

    @ViewChild('anchor') public anchor: ElementRef;
    @ViewChild('popup', { read: ElementRef }) public popup: ElementRef;

    @HostListener('keydown', ['$event'])
    public keydown(event: any): void {
        if (event.keyCode === 27) {
            this.toggleFilter(false);
        }
    }

    @HostListener('document:click', ['$event'])
    public documentClick(event: any): void {
        console.log('I enter');
        if (!this.contains(event.target)) {
            this.toggleFilter(false);
        }
    }

    public toggleFilter(show?: boolean): void {
        this.show = show !== undefined ? show : !this.show;
    }

    private contains(target: any): boolean {
        if (target.className === 'k-link') {
            return true;
        }

        return this.anchor.nativeElement.contains(target) ||
            (this.popup ? this.popup.nativeElement.contains(target) : false);
    }

    public filterAction(filtered: boolean) {
        this.filtered = filtered;

        if (filtered) {
            this.toggleFilter();
        }
    }
}
