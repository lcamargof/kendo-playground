import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-health-status-server',
    templateUrl: './health-status-server.component.html',
    styleUrls: ['./health-status-server.component.css']
})
export class HealthStatusServerComponent {
    @Input() data: any = {};
    detail = false;

    toggleServices() {
        this.detail = !this.detail;
    }
}
