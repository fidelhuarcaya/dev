import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { modalAnimations } from '../../../core/animations/animations';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../service/email.service';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss',
  animations: [
    modalAnimations.fadeIn,
    modalAnimations.modalEnter,
    modalAnimations.elementEnter,
    modalAnimations.staggerElements
  ],
  providers: [EmailService],
})
export class ContactModalComponent {
  @Output() send = new EventEmitter<FormGroup>();
  @Output() close = new EventEmitter<void>();
  @Input() form!: FormGroup;

  emailService = inject(EmailService);




  closeModal() {
    this.close.emit();
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.send.emit(this.form);
  }
}
