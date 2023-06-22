import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isMobile = false;
  constructor(private deviceService: DeviceDetectorService ) {

  }
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

}
