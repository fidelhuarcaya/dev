import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ContactModalComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(40px)', opacity: 0 }),
        animate('0.8s cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class HeaderComponent {
  isModalOpen = false;

  showModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
