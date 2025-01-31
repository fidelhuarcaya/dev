import { animate, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit } from '@angular/core';
import { ContactModalComponent } from '../../shared/components/contact-modal/contact-modal.component';
import { CommonModule } from '@angular/common';
import { modalAnimations } from '../../core/animations/animations';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../shared/service/email.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ContactModalComponent,
    LoaderComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    modalAnimations.fadeIn,
    modalAnimations.fadeInUp,
    modalAnimations.fadeInOut,
    modalAnimations.modalEnter,
    modalAnimations.fadeInDown
  ],
  providers: [EmailService]
})
export class HeaderComponent implements OnInit {
  isModalOpen = false;
  isLoading = false;
  message: string = 'Enviando...';
  router = inject(Router);
  emailService = inject(EmailService);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  send() {
    this.isLoading = true;
    this.emailService.sendEmail(this.form.value).subscribe(() => {
      this.isLoading = false;
      this.closeModal();
      this.router.navigate(['/send']);

    });
  }

  showModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isLoading = false;
  }
}
