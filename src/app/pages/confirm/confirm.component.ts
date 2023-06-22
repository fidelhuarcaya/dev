import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-30%)' }),
        animate('1.5s ease', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('1.5s ease', style({ transform: 'translateY(-40%)' }))
      ])
    ])
  ]
})
export class ConfirmComponent {
  constructor(private router:Router){
console.log('send')
  }
  return(){
    
    this.router.navigate(['']);
  }
  sendOtherEmail(){
    this.router.navigateByUrl('#contact')
  }
}
