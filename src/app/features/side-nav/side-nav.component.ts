import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{
  
  isMobile = false;
  constructor(private deviceService: DeviceDetectorService ) {

  }
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }


}
