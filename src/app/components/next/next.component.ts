import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'next',
    template: `
        <a class="next_btn" (click)="onNext(hash)">
            <i class="icon-angle-down"></i>
        </a>
    `,
    styleUrls: ['./next.component.scss'],
})
export class NextComponent {

    @Input() hash: string;

    constructor(
        private router: Router
    ) { }

    onNext(hash: string) {
        this.router.navigate([hash]);
    }

}