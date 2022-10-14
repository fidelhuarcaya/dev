import { BuiltinTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as Notiflix from 'notiflix';
import { Loading } from 'notiflix';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isVersionDesktop: Boolean = true;


  constructor(public device: DeviceDetectorService) {
    this.isVersionDesktop = this.device.isDesktop();
  }

  ngOnInit(): void {
    console.log("mobile is : " + this.device.isMobile())
  }


}
