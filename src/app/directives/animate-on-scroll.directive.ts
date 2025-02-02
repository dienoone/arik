import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
})
export class AnimateOnScrollDirective implements OnInit {
  private observer: IntersectionObserver | undefined;
  private hasAnimated = false;
  private transitionEndListener: (() => void) | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'opacity-0');
    this.renderer.addClass(this.el.nativeElement, 'translate-y-12');
    this.renderer.addClass(this.el.nativeElement, 'transition-all');
    this.renderer.addClass(this.el.nativeElement, 'duration-1000');
    this.renderer.addClass(this.el.nativeElement, 'ease-in-out');

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.animateElement();
          this.hasAnimated = true;
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private animateElement() {
    this.renderer.removeClass(this.el.nativeElement, 'opacity-0');
    this.renderer.removeClass(this.el.nativeElement, 'translate-y-12');

    // Listen for the end of the transition
    this.transitionEndListener = this.renderer.listen(
      this.el.nativeElement,
      'transitionend',
      () => {
        // Remove ALL classes from fade-up-init (including transitions)
        this.renderer.removeClass(this.el.nativeElement, 'opacity-0');
        this.renderer.removeClass(this.el.nativeElement, 'translate-y-12');
        this.renderer.removeClass(this.el.nativeElement, 'transition-all');
        this.renderer.removeClass(this.el.nativeElement, 'duration-1000');
        this.renderer.removeClass(this.el.nativeElement, 'ease-in-out');
        this.cleanupListener();
      }
    );

    // Fallback: Remove classes after 1000ms (matches duration-1000)
    setTimeout(() => {
      this.cleanupListener();
      this.renderer.removeClass(this.el.nativeElement, 'opacity-0');
      this.renderer.removeClass(this.el.nativeElement, 'translate-y-12');
      this.renderer.removeClass(this.el.nativeElement, 'transition-all');
      this.renderer.removeClass(this.el.nativeElement, 'duration-1000');
      this.renderer.removeClass(this.el.nativeElement, 'ease-in-out');
    }, 1000);
  }

  private cleanupListener() {
    if (this.transitionEndListener) {
      this.transitionEndListener(); // Remove the event listener
      this.transitionEndListener = undefined;
    }
  }

  ngOnDestroy() {
    // Clean up the observer
    this.observer?.disconnect();
  }
}
