import { Directive } from '@angular/core';
import { ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  
  constructor(private ele: ElementRef, renderer: Renderer) {
    ele.nativeElement.style.background = 'yellow';
    renderer.setElementStyle(ele.nativeElement, 'font-weight', 'bold');
  }

}
