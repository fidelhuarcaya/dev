import { trigger, transition, style, animate } from '@angular/animations';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('1.5s ease', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('1.5s ease', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  expand = false;
  activeItem: number = 0;
  isNavOpen = false;


  constructor() {

  }

  ngOnInit(): void {
    this.init()
  }
  setActiveItem(index: number) {
    this.activeItem = index;
  }

  init() {
    
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      const navbarExample2 = document.querySelector('#navbar-example2') as HTMLElement;
      if (prevScrollpos > currentScrollPos) {
        navbarExample2.classList.add('navbar-show');
        navbarExample2.classList.remove('navbar-hide');
      } else {
        navbarExample2.classList.add('navbar-hide');
        navbarExample2.classList.remove('navbar-show');
      }
      prevScrollpos = currentScrollPos;
    }
    
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  }

