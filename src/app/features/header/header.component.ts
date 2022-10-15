import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isVersionDesktop = false;
  constructor(
    public device: DeviceDetectorService, ) { 
      this.isVersionDesktop=device.isDesktop();
    }

  ngOnInit(): void {
  }
  getPadding(){
    if(this.isVersionDesktop)
    return '12%';
    else return '0%';
  }

}
