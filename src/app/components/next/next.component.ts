import { Component, Input } from '@angular/core';

@Component({
    selector: 'next',
    template: `
        <a class="next_btn" routerLink="{{hash}}">
            <i class="icon-arrows"></i>
        </a>
    `,
    styleUrls: ['./next.component.scss'],
})
export class NextComponent {

    @Input() hash: string;

    constructor() { }

}