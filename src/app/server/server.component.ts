import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',

}) //to separate from normal classes add decorator in component
export class ServerComponent {
    serverid = 15;
    serverStatus = 'online'
    allowServer = false;

    constructor() {

        setTimeout(() => {
            this.allowServer = true;
        }, 2000)

    }


}