import { Component, HostBinding } from '@angular/core';
// import { routeChangeTrigger } from '../../shared/animations';

@Component({
    selector: 'container',
    template: `
        <div class="container">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {

    constructor() { }

}