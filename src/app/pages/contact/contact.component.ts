import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
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
      Validators.minLength(4)]),
    email: new FormControl('',
      [Validators.email, Validators.required]),
    body: new FormControl('')
  })
  constructor(public service: EmailService) { }

  ngOnInit(): void {
  }
  sendEmail() {
    console.log("start request")
    if (this.emailForm.valid) {
      alert("Tu mensaje fue enviado")
      this.service.sendEmail(this.emailForm.value).subscribe((response: any) => {

      })
      this.emailForm.controls['name'].setValue("")
      this.emailForm.controls['email'].setValue("")
      this.emailForm.controls['body'].setValue("")
    }
  }
}
