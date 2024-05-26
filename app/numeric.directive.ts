import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumeric]'
})
export class NumericDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class') currentClass='';

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent): void {
    const inputValue = event.key.charCodeAt(0);

    if (inputValue>31&&(inputValue<48|| inputValue>57)) {
      this.currentClass='invalid';
      event.preventDefault();
    }

    else {
      this.currentClass='valid';
    }
  }

  }

