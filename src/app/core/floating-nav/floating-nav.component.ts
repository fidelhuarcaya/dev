import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-floating-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-nav.component.html',
  styleUrls: ['./floating-nav.component.scss']
})
export class FloatingNavComponent {
  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isExpanded = false;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.floating-nav')) {
      this.isExpanded = false;
    }
  }
}