import { Directive,ElementRef } from '@angular/core';


@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(private el: ElementRef) {
    const currentYear= new Date().getFullYear()
    const targetElement:HTMLElement=this.el.nativeElement;
    targetElement.classList.add('copyright');
    targetElement.textContent =`Copyright @${currentYear} all rights reseverved `
   }

}
