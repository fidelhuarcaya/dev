import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {
  isVersionDesktop: Boolean = true;
  constructor(public device: DeviceDetectorService, ) { 
    this.isVersionDesktop = this.device.isDesktop();
  }

  ngOnInit(): void {
  }

}
