import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { Report } from 'notiflix';
import { Email } from 'src/app/model/Message';
import { EmailService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email!: Email;
  emailForm = new FormGroup({
    name: new FormControl('', [
      Validators.nullValidator,
      Validators.minLength(4), Validators.required]), 
    email: new FormControl('',
      [Validators.email, Validators.required]),
    body: new FormControl('',Validators.required)
  })
  constructor(public service: EmailService) { }

  ngOnInit(): void {
  }
  sendEmail() {


    if (this.emailForm.valid) {

      this.service.sendEmail(this.emailForm.value).subscribe((response: any) => {
        
      })
this.emailForm.reset();
      this.confirm()


    }
  }
  public failure() {

  }

  public confirm() {
    Report.success(
      'Mensaje enviado',
      'Tu mensaje fue enviado con éxito, recibiras la respuesta en breve...',
      'De acuerdo',
    );
  }
}
