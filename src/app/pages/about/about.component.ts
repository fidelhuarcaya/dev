import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PdfViewerService } from 'src/app/core/service/pdf-viewer.service';
import Utils from 'src/app/shared/utils/commons.utils';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  isMobile = false;
  constructor(private deviceService: DeviceDetectorService,
    private readonly pdfViewerService:PdfViewerService,
    private router:Router) { }

  ngOnInit(): void { 
    this.isMobile = this.deviceService.isMobile();
    const width = this.isMobile ? '100%' : '50%';
  }
  showCV() {
    this.pdfViewerService.url='../../../../assets/files/CV-FIDEL-HUARCAYA.pdf'
    this.router.navigate(['cv']);
  }
}
