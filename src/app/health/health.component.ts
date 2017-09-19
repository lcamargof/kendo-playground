import { Component, Input } from '@angular/core';

@Component({
    template: `
        <div class="rtk-item">
            <div style="display: flex">
                <div class="rtk-server">
                    <div>
                        AD RTK <br> {{ data.name }}
                    </div>
                </div>
                <div class="rtk-info-container">
                    <ul>
                        <li>
                            <div>
                                Host Status <span class="value"><strong>{{ data.status }}</strong></span>
                            </div>
                        </li>
                        <li>
                            <div>
                                CPU Utilization <span class="value">{{ data.cpu }}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                Memory Utilization <span class="value">{{ data.memory }}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                Total Disc Space <span class="value">{{ data.totalSpace }}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                Available D/Space <span class="value">{{ data.availableSpace }}</span>
                            </div>
                        </li>
                        <li class="service-toggle" [style.background-color]="detail ? '#ccc' : ''" (click)="toggleServices()">
                            <div style="float: right">
                                Services <i class="fa fa-plus"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="services" *ngIf="detail">
                <ul>
                    <li *ngFor="let service of data.services">
                        <div [ngClass]="{'error': !service.status}">{{service.name}}</div>
                    </li>
                </ul>
            </div>
        </div>
    `,
    styles: [
        `
            .rtk-item {
                background-color: #f2f2f2;
                border: 1px #ccc solid;
                margin-right: 15px;
                margin-top: 15px;
                font-size: 14px;
            }
            
            .services {
                border-top: 1px #ccc solid;
            }
            
            .services > ul > li:last-child {
                border-bottom: none;
            }
            
            ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
            }
            
            .rtk-info-container > ul {
                width: 200px;
            }
            
            ul > li {
                width: 100%;
                border-bottom: 1px #ccc solid;
                line-height: 22px;
            }

            ul > li > div {
                padding: 0 5px;
            }
            
            ul > li > .error {
                background-color: #f2dede;
            }

            .rtk-info-container > ul > li > div > .value {
                display: block;
                float: right;
            }
            
            .rtk-info-container > ul > li:last-child {
                border-bottom: none;
            }
            
            .service-toggle {
                float: right;
                cursor: pointer;
            }
            
            .service-toggle:hover {
                background-color: #ccc;
            }
            
            .rtk-server {
                width: 120px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: 1px #ccc solid;
            }
        `
    ],
    selector: 'app-health-item'
})
export class HealthItemComponent {
    @Input() data: any = {};
    detail = false;

    toggleServices() {
        this.detail = !this.detail;
    }
}

@Component({
    template: `
        <div style="padding: 25px;">
            <div class="rtk">
                AD RTK
            </div>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; list-style-type: none;">
                <app-health-item *ngFor="let item of data" [data]="item"></app-health-item>
            </div>
        </div>
    `,
    styles: [
        `.rtk {
            margin: 0 auto; 
            width: 150px; 
            height: 120px; 
            text-align: center; 
            line-height: 120px;
            border: 1px #ccc solid;
            margin-bottom: 15px;
            background-color: #f2f2f2;
        }`
    ],
    selector: 'app-health'
})
export class HealthComponent {

    data = [
        {
            name: 'SERVER 1',
            status: 'Ok',
            cpu: '35%',
            memory: '4GB',
            totalSpace: '512GB',
            availableSpace: '120GB',
            services: [
                {
                    name: 'test service 1',
                    status: true
                },
                {
                    name: 'test service 2',
                    status: false
                },
                {
                    name: 'test service 3',
                    status: true
                },
                {
                    name: 'test service 4',
                    status: true
                },
            ]
        },
        {
            name: 'SERVER 2',
            status: 'Ok',
            cpu: '50%',
            memory: '8GB',
            totalSpace: '512GB',
            availableSpace: '120GB',
            services: [
                {
                    name: 'test service 1',
                    status: true
                },
                {
                    name: 'test service 2',
                    status: true
                },
                {
                    name: 'test service 3',
                    status: true
                },
                {
                    name: 'test service 4',
                    status: true
                },
            ]
        },
        {
            name: 'SERVER 3',
            status: 'Ok',
            cpu: '35%',
            memory: '4GB',
            totalSpace: '512GB',
            availableSpace: '120GB',
            services: [
                {
                    name: 'test service 1',
                    status: true
                },
                {
                    name: 'test service 2',
                    status: false
                },
                {
                    name: 'test service 3',
                    status: true
                },
                {
                    name: 'test service 4',
                    status: true
                },
            ]
        },
        {
            name: 'SERVER 4',
            status: 'Ok',
            cpu: '35%',
            memory: '4GB',
            totalSpace: '512GB',
            availableSpace: '120GB',
            services: [
                {
                    name: 'test service 1',
                    status: true
                },
                {
                    name: 'test service 2',
                    status: false
                },
                {
                    name: 'test service 3',
                    status: true
                },
                {
                    name: 'test service 4',
                    status: true
                },
            ]
        },
        {
            name: 'SERVER 5',
            status: 'Ok',
            cpu: '35%',
            memory: '4GB',
            totalSpace: '512GB',
            availableSpace: '120GB',
            services: [
                {
                    name: 'test service 1',
                    status: true
                },
                {
                    name: 'test service 2',
                    status: false
                },
                {
                    name: 'test service 3',
                    status: true
                },
                {
                    name: 'test service 4',
                    status: true
                },
            ]
        },
        {
            name: 'SERVER 6',
            status: 'Ok',
            cpu: '35%',
            memory: '4GB',
            totalSpace: '512GB',
            availableSpace: '120GB',
            services: [
                {
                    name: 'test service 1',
                    status: true
                },
                {
                    name: 'test service 2',
                    status: false
                },
                {
                    name: 'test service 3',
                    status: true
                },
                {
                    name: 'test service 4',
                    status: true
                },
            ]
        }
    ];
}
