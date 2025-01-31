import { Component } from '@angular/core';
import { fadeInAnimation } from '../../core/animations/fade-animations';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [
    fadeInAnimation,
  ]
})
export class FooterComponent {
  getYear() {
    return new Date().getFullYear();
  }
}
