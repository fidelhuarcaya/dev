import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-20%)' }),
        animate('1.5s ease', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('1.5s ease', style({ transform: 'translateY(-20%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  expand = false;
  activeItem: number = 0;
  isNavOpen = false;
  showSpinner = true;

  constructor() {

  }

  ngOnInit(): void {

    this.init();

    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }
  setActiveItem(index: number) {
    this.activeItem = index;
  }

  init() {

    let prevScrollpos = window.scrollY;
    window.onscroll = function () {
      let currentScrollPos = window.scrollY;
      const navbarExample2 = document.querySelector('#navbar-example2') as HTMLElement;
      if (navbarExample2) {
        if (prevScrollpos > currentScrollPos) {
          navbarExample2.classList.add('navbar-show');
          navbarExample2.classList.remove('navbar-hide');
        } else {
          navbarExample2.classList.add('navbar-hide');
          navbarExample2.classList.remove('navbar-show');
        }
      }
      prevScrollpos = currentScrollPos;
    }

  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

}