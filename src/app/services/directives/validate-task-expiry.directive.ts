import { Directive, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appValidateTaskExpiry]'
})
export class ValidateTaskExpiryDirective {

  @Input() appValidateTaskExpiry: string;

  constructor(elem: ElementRef, renderer: Renderer2 ) { 
    console.log(this.appValidateTaskExpiry);
    //console.log(elem.nativeElement.style);
    let targetDate = new Date(this.appValidateTaskExpiry);
    let currentDate = new Date();
    if(currentDate.getDate() >= targetDate.getDate()) {
      //elem.nativeElement.setStyle({ 'backgroundColor' : 'yellow'});
      //elem.nativeElement.style.backgroundColor = 'yellow'
      renderer.setStyle(elem.nativeElement, 'color', 'red');
    }
  }
}
