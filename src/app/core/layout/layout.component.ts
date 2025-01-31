import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../sections/header/header.component';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { FooterComponent } from '../../sections/footer/footer.component';
import { FloatingNavComponent } from '../floating-nav/floating-nav.component';
import { EmailService } from '../../shared/service/email.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    FloatingNavComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [
    EmailService
  ]
})
export class LayoutComponent implements OnInit {

  emailService = inject(EmailService);

  ngOnInit(): void {
    this.checkHealt()
  }
  checkHealt() {
    this.emailService.sendEmail({
      email: '',
      name: '',
      message: ''
    }).subscribe(() => {
    });
  }
}
