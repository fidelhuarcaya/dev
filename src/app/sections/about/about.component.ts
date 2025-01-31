import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdfViewerService } from '../../core/layout/service/pdf-viewer.service';
import { modalAnimations } from '../../core/animations/animations';
import { scrollAnimations } from '../../core/animations/scroll-animations';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';
import { fadeInAnimation } from '../../core/animations/fade-animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    fadeInAnimation
  ],
})
export class AboutComponent implements OnInit {
  isMobile = false;
  pdfViewerService = inject(PdfViewerService);
  router = inject(Router);
  private observer: IntersectionObserver | null = null;
  animationState: 'void' | 'visible' = 'void';

  ngOnInit() {
    if (!this.observer) {
      this.setupIntersectionObserver();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      threshold: 0.3
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && this.animationState === 'void') {
          this.animationState = 'visible';
          this.observer?.disconnect();
        }
      });
    }, options);

    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      this.observer.observe(aboutSection);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  showCV() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['cv'])
    );
    window.open(url, '_blank');
  }
}
