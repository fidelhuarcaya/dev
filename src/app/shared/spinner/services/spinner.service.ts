import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  showSpinner: boolean = false;

  constructor() { }

  showLoadingSpinner() {
    this.showSpinner = true;
  }
  hideLoadingSpinner() {
    this.showSpinner = false;
  }
}
