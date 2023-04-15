import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {
  applications!: any[]
  constructor() {

  }

  ngOnInit(): void {
    this.getApplication();
  }

  getApplication() {
    this.applications = [
      {
        languages:['Java', 'SQLite', 'XML'],
        url:'https://play.google.com/store/apps/details?id=com.alphaneo.calculadora',
        image:'https://play-lh.googleusercontent.com/5pV-4mrUqYDSJlBTSLykCXf8sbnnrSpbDxQuRDyMOoHQe5KLhVHf4_GSRzcyTcR-sg=w240-h480-rw',
        name:'Neo Calculator',
        description:'Simple calculator for android with themes, customizable. With scientific functions.'

      },
      {
        languages:['Java', 'SQLite', 'XML'],
        url:'https://play.google.com/store/apps/details?id=com.alphaneo.izimath',
        image:'https://play-lh.googleusercontent.com/SZvGNHXLhv8AcYGaTYmL4nRAKchHgbkYzB2qX8X4TnZniIMGOKlWo9QzJCtQp3QpQLE=s256-rw',
        name:'Izimath',
        description:
        "App of formulas, games and mathematical tricks for students and any other passionate about mathematics."

      },
      {
        languages:['Java', 'SQLite', 'XML'],
        url:'https://play.google.com/store/apps/details?id=com.alphaneo.izimath.pro',
        image:'https://play-lh.googleusercontent.com/1H5Zs5-tbZ-sDsm6nxPDcCso9O0X0a7rofoD6vRIVV1IOzhGsNbEBkASNJNdeHdYU4Y=w240-h480-rw',
        name:'Izimath PRO',
        description:'The PREMIUM version of the Izimath application with more features, such as viewing the themes in full screen.'

      },
      {
        languages:['Angular', 'Spring Boot', 'Postgres SQL'],
        url:'https://github.com/fidelhuarcaya/angular11-rest-api',
        image:'https://cdn-icons-png.flaticon.com/512/5609/5609117.png',
        name:'Classroom App',
        description:'A web application to register, list, modify and delete students.'

      },
    ]
  }

}
