import { trigger, state, style, animate, transition } from '@angular/animations';

export const routeChangeTrigger = trigger('routeChangeState', [
    transition(':enter', [
        style({
            opacity: 0,
        }),
        animate('3000ms')
    ]),
    transition(':leave', animate(2000, style({
        opacity: 0
    })))
]);