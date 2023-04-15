import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'fidelhuarcaya';
  showSpinner = false;
  ngOnInit(): void {
    setTimeout((()=>{ this.showSpinner = true;}), 2000);
  }

}
