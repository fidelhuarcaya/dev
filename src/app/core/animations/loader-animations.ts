import { trigger, style, animate, transition } from '@angular/animations';

export const loaderAnimations = {
  fadeIn: trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0 }))
    ])
  ]),
  
  pulse: trigger('pulse', [
    transition(':enter', [
      style({ transform: 'scale(0.95)', opacity: 0 }),
      animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', 
        style({ transform: 'scale(1)', opacity: 1 })
      )
    ])
  ])
};