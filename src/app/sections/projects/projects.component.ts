import { Component } from '@angular/core';
import { modalAnimations } from '../../core/animations/animations';
import { scrollAnimations } from '../../core/animations/scroll-animations';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';
import { fadeInAnimation } from '../../core/animations/fade-animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    FadeInDirective,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    scrollAnimations.fadeIn,
    fadeInAnimation,

  ],
})
export class ProjectsComponent {

}
