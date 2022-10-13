import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){
    Notiflix.Loading.dots();
    Notiflix.Loading.remove(2000)
  }
  ngOnInit(): void {
    
  }
  title = 'fidelhuarcaya-web';
  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section: string) {
    var sec=document.querySelector('#' + section);
    (<HTMLElement>sec).scrollIntoView();
  }
}
