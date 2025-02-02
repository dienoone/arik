import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-animation',
  templateUrl: './scroll-animation.component.html',
  styleUrls: ['./scroll-animation.component.css'],
})
export class ScrollAnimationComponent {
  @ViewChild('scrollTrigger', { static: false }) scrollTrigger!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (!this.scrollTrigger) return;

    const elementTop =
      this.scrollTrigger.nativeElement.getBoundingClientRect().top;
    const elementHeight =
      this.scrollTrigger.nativeElement.getBoundingClientRect().height;
    const windowHeight = window.innerHeight;

    // Calculate progress from 0 (just visible) to 1 (fully visible)

    let progress = (windowHeight - elementTop) / elementHeight;
    progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
    console.log(progress);

    // Get elements
    const img = document.querySelector('.arik_img') as HTMLDivElement;
    const leftText = document.querySelector('.left-text') as HTMLHeadingElement;
    const rightText = document.querySelector(
      '.right_text',
    ) as HTMLHeadingElement;

    // Apply translateY animation
    img.style.transform = `translateY(${this.scale(progress, 0, 1, 96, 0)}px)`;
    leftText.style.transform = `translateX(${this.scale(progress, 0, 1, -96, 0)}px)`;
    rightText.style.transform = `translateX(${this.scale(progress, 0, 1, 96, 0)}px)`;

    // Apply opacity animation (0 → 1)
    leftText.style.opacity = `${progress}`;
    rightText.style.opacity = `${progress}`;
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
