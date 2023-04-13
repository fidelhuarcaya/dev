import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import Utils from 'src/app/shared/utils/commons.utils';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isMobile = false;
  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void { 
    this.isMobile = this.deviceService.isMobile();
    const width = this.isMobile ? '100%' : '50%';
  }
  showCV() {
    Utils.abrirPDF('./assets/files/CV FIDEL HUARCAYA.pdf');
  }
}
