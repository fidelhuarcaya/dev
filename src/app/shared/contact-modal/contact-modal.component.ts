import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 0 }))
      ])
    ]),
    trigger('modalEnter', [
      transition(':enter', [
        style({ 
          transform: 'scale(0.95) translateY(-30px)',
          opacity: 0 
        }),
        animate('500ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ 
            transform: 'scale(1) translateY(0)',
            opacity: 1 
          }))
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ 
            transform: 'scale(0.95) translateY(-30px)',
            opacity: 0 
          }))
      ])
    ]),
    trigger('elementEnter', [
      transition(':enter', [
        style({ 
          transform: 'translateY(20px)',
          opacity: 0 
        }),
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ 
            transform: 'translateY(0)',
            opacity: 1 
          }))
      ])
    ]),
    trigger('staggerElements', [
      transition(':enter', [
        query('.form-group, .submit-button', [
          style({ 
            opacity: 0, 
            transform: 'translateY(20px)' 
          }),
          stagger(100, [
            animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', 
              style({ 
                opacity: 1, 
                transform: 'translateY(0)' 
              }))
          ])
        ])
      ])
    ])
  ]
})
export class ContactModalComponent {
  @Output() close = new EventEmitter<void>();

  formData = {
    name: '',
    email: '',
    project: ''
  };

  closeModal() {
    this.close.emit();
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Aquí puedes agregar la lógica para enviar el formulario
    this.closeModal();
  }
}
