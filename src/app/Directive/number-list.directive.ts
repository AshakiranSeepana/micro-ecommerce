import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appNumberList]'
})
export class NumberListDirective implements OnInit, OnDestroy {
  @Input('appNumberList') cal: number = 10; // input from HTML
  orderDisplay: number = 0;
  intervalId: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Update every 100ms
    this.intervalId = setInterval(() => {
      this.orderDisplay = this.cal +this.orderDisplay;  // increment logic
      this.elementRef.nativeElement.innerText = this.orderDisplay;
    }, 100);
  }
  ngOnDestroy(): void {
    // Clean up interval when directive/component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
