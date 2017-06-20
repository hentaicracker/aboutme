import { Injectable } from '@angular/core';

const Granim = require('granim');

const states = {
    "default-state": {
        gradients: [
            ['#9D50BB', '#6E48AA'],
            ['#26D0CE', '#1A2980'],
        ],
        transitionSpeed: 5000
    },
    "violet-state": {
        gradients: [
            ['#4776E6', '#8E54E9']
        ],
        transitionSpeed: 2000
    },
    "orange-state": {
        gradients: [['#FF4E50', '#F9D423']],
        loop: false
    },
    "black-state": {
        gradients: [['#FFFFFF', '#000000']],
    },
    "gradient-state": {
        gradients:[
            ['#ff3eff', '#003eff']
        ]
    }
}

@Injectable()
export class AppService {

    granimInstance: any

    getInstance() {
        return this.granimInstance = new Granim({
            element: '#canvas-interactive',
            name: 'interactive-gradient',
            elToSetClassOn: '.wrapper',
            direction: 'diagonal',
            opacity: [1, 1],
            isPausedWhenNotInView: true,
            stateTransitionSpeed: 500,
            states: states
        });
    }

    play() {
        this.granimInstance.play();
    }

    pause() {
        this.granimInstance.pause();
    }

    clear() {
        this.granimInstance.clear();
    }

    changeState(state: string) {
        this.granimInstance.changeState(state);
    }

}