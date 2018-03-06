import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropdownDirectiveDirective {

  @HostBinding('class.open') open = false;

  constructor() { }

  @HostListener('click') appClicked(eventData: Event) {
    this.open = !this.open;
  }

}
