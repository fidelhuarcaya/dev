import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MessageService } from 'primeng/api';
import { Email } from 'src/app/core/interfaces/email.interface';
import { EmailService } from 'src/app/core/service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email!: Email;
  emailForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(4), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required)
  });
  buttonLabel = 'Send';
  showSend = false;
  invalidForm = true;

  isMobile = false;
  constructor(private service: EmailService,
    private elementRef: ElementRef,
    private messageService: MessageService,
    private deviceService: DeviceDetectorService,
    private router: Router) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }
  sendEmail() {
    if (this.emailForm.invalid) {
      return;
    }

    this.email = {
      name: this.emailForm.value.name ?? '',
      message: this.emailForm.value.message ?? '',
      email: this.emailForm.value.email ?? ''
    }
    this.service.sendEmail(this.email).subscribe((response: any) => {

    })
    this.emailForm.reset();

  }
 onClick() {

    /*if (this.emailForm.invalid) {
      this.emailForm.get('name')?.markAsDirty();
      this.emailForm.get('email')?.markAsDirty();
      this.emailForm.get('body')?.markAsDirty();
      this.invalidForm = false;
      return;
    }*/

    if (this.showSend)
      this.showSend = false;
    else this.showSend = true

    this.invalidForm = true;
    const button = this.elementRef.nativeElement.querySelector('button');
    button.classList.toggle('clicked');

    this.sendEmail();
    //this.addSingle();

    setInterval(() => {
      this.router.navigate(['send']);
      return;
    }, 2000)




  }
  /*addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Mensaje enviado', detail: 'Su mensaje a sido recibido exitosamente.' });
  }*/
}

