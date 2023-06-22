import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent {
  isMobile = false;
  
  constructor( private deviceService: DeviceDetectorService,) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }
}
