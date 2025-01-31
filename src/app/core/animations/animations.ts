// animations.ts
import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger
} from '@angular/animations';

export const modalAnimations = {
    fadeIn: trigger('fadeIn', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('500ms ease-in', style({ opacity: 1 }))
        ]),
        transition(':leave', [
            animate('500ms ease-out', style({ opacity: 0 }))
        ])
    ]),

    modalEnter: trigger('modalEnter', [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'scale(0.8) translateY(-50px)'
            }),
            animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                style({
                    opacity: 1,
                    transform: 'scale(1) translateY(0)'
                })
            )
        ]),
        transition(':leave', [
            animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                style({
                    opacity: 0,
                    transform: 'scale(0.8) translateY(20px)'
                })
            )
        ])
    ]),

    elementEnter: trigger('elementEnter', [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(10px)'
            }),
            animate('200ms ease-out',
                style({
                    opacity: 1,
                    transform: 'translateY(0)'
                })
            )
        ])
    ]),

    staggerElements: trigger('staggerElements', [
        transition(':enter', [
            query('.form-group, .submit-button', [
                style({
                    opacity: 0,
                    transform: 'translateY(10px)'
                }),
                stagger(100, [
                    animate('200ms ease-out',
                        style({
                            opacity: 1,
                            transform: 'translateY(0)'
                        })
                    )
                ])
            ])
        ])
    ]),
    fadeInUp: trigger('fadeInUp', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
    ]),
    fadeInDown: trigger('fadeInDown', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
    ]),
    fadeInOut: trigger('fadeInOut', [
        state('in', style({ opacity: 1 })),
        state('out', style({ opacity: 0 })),
        transition('in => out', animate('200ms ease-out')),
        transition('out => in', animate('200ms ease-in'))
    ]),
};