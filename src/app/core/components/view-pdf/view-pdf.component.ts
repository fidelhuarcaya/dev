import { Component, OnInit } from '@angular/core';
import { PdfViewerService } from '../../service/pdf-viewer.service';
import { MessageService } from 'primeng/api';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.scss']
})
export class ViewPdfComponent implements OnInit {

  urlPdf!: SafeResourceUrl;


  constructor(private readonly pdfViewerService: PdfViewerService,
    private messageService: MessageService,
    private sanitizer: DomSanitizer) {
  }
  ngOnInit(): void {


    this.urlPdf = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfViewerService.url);

    if (!this.urlPdf || this.urlPdf === '') {
      this.messageService.add({
        severity: 'error',
        summary: 'Error abrir archivo',
        detail: 'No se ha podido cargar el archivo.'
      });
      return;

    }

  }


}
