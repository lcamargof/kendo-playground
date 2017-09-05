import { AfterViewInit, Component, DoCheck, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.css', '../../node_modules/@progress/kendo-theme-default/dist/all.css']
})
export class AppComponent implements AfterViewInit, DoCheck {

    ngDoCheck() {
        console.log('Do check was called!!!!');
    }

    ngAfterViewInit() {
        $('#grid').kendoGrid({
            height: 550,
            sortable: true
        });

        var dialog = $('#dialog'),
            undo = $("#undo");

        undo.click(function () {
            dialog.data("kendoDialog").open();
            undo.fadeOut();
        });

        function onClose() {
            undo.fadeIn();
        }

        dialog.kendoDialog({
            width: "400px",
            title: "Software Update",
            closable: false,
            modal: false,
            content: "<p>A new version of <strong>Kendo UI</strong> is available. Would you like to download and install it now?<p>",
            actions: [
                { text: 'Skip this version' },
                { text: 'Remind me later' },
                { text: 'Install update', primary: true }
            ],
            close: onClose
        });

        var myWindow = $("#window"),
            undo = $("#undo");

        undo.click(function () {
            myWindow.data("kendoWindow").open();
            undo.fadeOut();
        });

        myWindow.kendoWindow({
            width: "600px",
            title: "About Alvar Aalto",
            visible: false,
            actions: [
                "Pin",
                "Minimize",
                "Maximize",
                "Close"
            ],
            close: onClose
        }).data("kendoWindow").center().open();
    }

    isChecked() {
        console.log('Is checkbox checked triggered');
    }
}
