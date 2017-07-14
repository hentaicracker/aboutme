import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[heightFix]'
})
export class HeightFixDirective {

    private height: number;
    private imgHeight: number;

    constructor(private el: ElementRef) {
        this.height = Number(el.nativeElement.offsetHeight);
        this.imgHeight = Number(el.nativeElement.children[0].height);
        if(this.height < this.imgHeight) {
            el.nativeElement.style.height = String(this.imgHeight);
        }
    }

}