import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBlurring]',
})
export class BlurringDirective implements OnInit {
  load = 0;
  intervalId: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.blurring(this.intervalId), 30);
  }

  blurring(int: any) {
    this.load++;

    if (this.load > 30) {
      clearInterval(int);
    }

    this.el.nativeElement.style.filter = `blur(${this.scale(this.load, 0, 30, 30, 0)}px)`;
  }

  scale(
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number,
  ) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }
}
