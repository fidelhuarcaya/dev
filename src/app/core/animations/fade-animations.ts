import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  state('hidden', style({ opacity: 0 })),
  state('visible', style({ opacity: 1 })),
  transition('hidden => visible', animate('500ms ease-in')),
]);