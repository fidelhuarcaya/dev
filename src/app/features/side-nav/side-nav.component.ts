import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isVersionDesktop: Boolean = true;
  private path: string = "../../assets/img";
  constructor(
   private domSanitizer: DomSanitizer, 
   public matIconRegistry: MatIconRegistry,
   public device: DeviceDetectorService, 
   private _formBuilder: FormBuilder ) {
    this.isVersionDesktop = this.device.isDesktop();
   this.matIconRegistry
   .addSvgIcon("github", this.setPath(`${this.path}/github.svg`))
   .addSvgIcon("instagram", this.setPath(`${this.path}/instagram.svg`))
   .addSvgIcon("youtube", this.setPath(`${this.path}/youtube.svg`))
   .addSvgIcon("linkedin", this.setPath(`${this.path}/linkedin.svg`));
  }
  private setPath(url: string): SafeResourceUrl { 
   return this.domSanitizer.bypassSecurityTrustResourceUrl(url); 
  }

}
