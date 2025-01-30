import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PdfViewerService } from '../../core/layout/service/pdf-viewer.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isMobile = false;
  pdfViewerService = inject(PdfViewerService);
  router = inject(Router);

  showCV() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['cv'])
    );
    window.open(url, '_blank');
  }
  
}
