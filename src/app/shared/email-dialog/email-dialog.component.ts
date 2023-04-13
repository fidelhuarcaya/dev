import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { Email } from 'src/app/model/Message';
import { EmailService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.css']
})
export class EmailDialogComponent implements OnInit {
  email!: Email;
  mostrarMensaje = false;
  invalidForm = true;
  emailForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(4), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required)
  })
  isClicked = false;
  buttonLabel = 'Send';
  showSend = false;
  constructor(public service: EmailService,
    private elementRef: ElementRef, private messageService: MessageService) { }

  ngOnInit(): void {

  }
  sendEmail() {
    if (this.emailForm.invalid) {
      return;
    }
    this.addSingle();
    this.email = {
      name: this.emailForm.value.name ?? '',
      email: this.emailForm.value.email ?? '',
      message: this.emailForm.value.message ?? '',
    }
    this.service.sendEmail(this.email)
      .subscribe({
        next: (response) => {


        },
        error: (e) => {
          //console.log(e.message)
        },
        complete: () => {
          
        }


      })
    this.emailForm.reset();




  }
  onClick() {

    if (this.emailForm.invalid) {
      this.emailForm.get('name')?.markAsDirty();
      this.emailForm.get('email')?.markAsDirty();
      this.emailForm.get('body')?.markAsDirty();
      this.invalidForm = false;
      return;
    }

    if (this.showSend)
      this.showSend = false;
    else this.showSend = true

    this.invalidForm = true;
    const button = this.elementRef.nativeElement.querySelector('button');
    button.classList.toggle('clicked');

    this.sendEmail();
    /*const buttonText = button.querySelector('p');*/
    //buttonText.textContent = button.label === 'Tu mensaje se ha enviado' ? 'Enviar mensaje' : 'Tu mensaje se ha enviado';
  }
  addSingle() {
    this.messageService.add({
      severity: 'success', summary: 'Mensaje enviado',
      detail: 'Su mensaje a sido recibido exitosamente.'
    });
  }
}
