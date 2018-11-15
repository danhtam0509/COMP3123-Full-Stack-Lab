import { Directive, HostListener, ElementRef } from '@angular/core';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { 
    
  }

  @HostListener('focusout') onFocusOut () {
    this.el.nativeElement.style.textTranform = "uppercase";
  }
}
