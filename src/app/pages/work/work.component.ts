import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  isMobile = false;

  constructor( private deviceService: DeviceDetectorService,) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }
}
