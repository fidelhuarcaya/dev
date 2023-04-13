import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  isMobile = false;

  constructor( private deviceService: DeviceDetectorService,) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

}
