import { Directive, ElementRef, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../../core/animations/fade-animations';

@Directive({
  selector: '[fadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;

  // Controla el estado de la animación
  @HostBinding('@fadeInAnimation')
  get animationState() {
    return this.hasAnimated ? 'visible' : 'hidden';
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const options = {
      threshold: 0.3, // 30% del elemento visible
      rootMargin: '0px 0px -50px 0px' // Activa 50px antes del final del viewport
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.observer?.disconnect();
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
