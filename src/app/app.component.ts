import { AfterViewInit, Component, DoCheck, NgZone, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.css', '../../node_modules/@progress/kendo-theme-default/dist/all.css']
})
export class AppComponent{

}
