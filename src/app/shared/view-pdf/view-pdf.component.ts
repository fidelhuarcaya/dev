import { Component, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PdfViewerService } from '../../core/layout/service/pdf-viewer.service';


@Component({
  selector: 'app-view-pdf',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.scss']
})
export class ViewPdfComponent implements OnInit {

  urlPdf!: SafeResourceUrl;
  sanitizer = inject(DomSanitizer);
  pdfViewerService = inject(PdfViewerService);

  ngOnInit(): void {


    this.urlPdf = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfViewerService.url);

    if (!this.urlPdf || this.urlPdf === '') {
      alert('No se ha encontrado el archivo');
      return;

    }

  }


}
