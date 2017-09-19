import { Injectable } from '@angular/core';

@Injectable()
export class HealthStatusService {

    constructor() {
    }

    getHealthStatus() {
        return new Promise((resolve, reject) => {
           return resolve([
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
           ]);
        });
    }
}
