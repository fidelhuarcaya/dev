import { trigger, style, animate, transition, query, stagger, sequence, state } from '@angular/animations';

export const scrollAnimations = {
  fadeIn: trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    state('visible', style({ opacity: 1 })),
    transition('void => visible', [
      style({ opacity: 0 }),
      animate('300ms ease-out', style({ opacity: 1 })),
      sequence([
        query('.about-image-container, .about-info', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(200, [
            animate('500ms ease-out', 
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ], { optional: true }),
        
        query('.social-link', [
          style({ opacity: 0, transform: 'scale(0.8)' }),
          stagger(100, [
            animate('400ms ease-out', 
              style({ opacity: 1, transform: 'scale(1)' })
            )
          ])
        ], { optional: true }),
        
        query('.about-description', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(150, [
            animate('400ms ease-out', 
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ], { optional: true }),
        
        query('.cta-button', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('300ms ease-out', 
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ], { optional: true })
      ])
    ]),
    // No transición para el estado visible => void
    transition('visible => void', [])
  ])
  
};
