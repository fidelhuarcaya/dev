import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { loaderAnimations } from '../../../core/animations/loader-animations';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  animations: [loaderAnimations.fadeIn, loaderAnimations.pulse],

})
export class LoaderComponent {
  @Input() message: string = 'Cargando...';
}
