import { trigger, state, style, animate, transition } from '@angular/animations';

export const routeChangeTrigger = trigger('routeChangeState', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(500)
    ]),
    transition(':leave', animate(500, style({
        opacity: 0
    })))
]);