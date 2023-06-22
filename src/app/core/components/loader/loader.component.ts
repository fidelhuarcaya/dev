import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  title = 'fidelhuarcaya';
  showSpinner = true;

  constructor(private router:Router){

  }

  ngOnInit(): void {
    setTimeout((() => {
      this.showSpinner = false;
    }), 2000);
  }
}
