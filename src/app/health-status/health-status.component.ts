import { Component, OnInit } from '@angular/core';
import { HealthStatusService } from './shared/health-status.service';

@Component({
    selector: 'app-health-status',
    styleUrls: ['./health-status.component.css'],
    templateUrl: './health-status.component.html'
})
export class HealthStatusComponent implements OnInit {

    // TODO: Remove hardcoded data
    public data: any = [];

    constructor(private service: HealthStatusService) {}

    ngOnInit() {
        this.service.getHealthStatus().then(result => this.data = result);
    }
}
