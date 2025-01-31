import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../../shared/service/email.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { fadeInAnimation } from '../../core/animations/fade-animations';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
    FadeInDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    fadeInAnimation,
  ]
})
export class ContactComponent implements OnInit {
  message: string = 'Enviando...';
  router = inject(Router);
  emailService = inject(EmailService);
  form!: FormGroup;
  isLoading = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  send() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.emailService.sendEmail(this.form.value).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/send']);
    });
  }

}
