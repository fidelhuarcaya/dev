import { trigger, transition, style, animate } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DialogService } from 'primeng/dynamicdialog';
import { EmailDialogComponent } from 'src/app/shared/email-dialog/email-dialog.component';
import Utils from 'src/app/shared/utils/commons.utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent implements OnInit {
  texto = ['Backend developer', 'Mobile developer', 'Software developer'];
  colorPalette = ['#E3E7D1','#01a6ff','#63BE94'];
  textoMostrado = '';
  mostrarCursor = true;

  isMobile = false;

  isClicked = false;
  intervalId: any;
  colorActual='#E3E7D1'
  isNavOpen=false;
  constructor(public dialogService: DialogService,
    private deviceService: DeviceDetectorService,
    private el: ElementRef) { }

  ngOnInit(): void {
    this.init();
    this.isMobile = this.deviceService.isMobile();
    this.mostrarTexto();
    
  }

  mostrarTexto() {
    const textoActual = this.texto.shift(); // Obtener y eliminar el primer elemento del arreglo


    if (!textoActual) {
      return
    }
    const intervalo = setInterval(() => {
      this.textoMostrado += textoActual[this.textoMostrado.length];
      if (this.textoMostrado.length === textoActual?.length) {
        clearInterval(intervalo); // Detener el intervalo cuando se ha mostrado todo el texto
        this.mostrarCursor = false; // Desactivar el cursor al final del texto
        setTimeout(() => {
          this.texto.push(textoActual); // Agregar el texto anterior al final del arreglo
          this.textoMostrado = ''; // Reiniciar el texto mostrado
          this.mostrarCursor = true; // Activar el cursor para el próximo texto
          this.mostrarTexto(); // Mostrar el próximo texto
          this.colorActual=this.colorPalette[Math.floor(Math.random() * this.colorPalette.length)];
        }, 2000); // Esperar 2 segundos antes de mostrar el próximo texto
      }
      
    }, 200); // Mostrar una letra cada 200 milisegundos
  }

  show() {

    const width = this.isMobile ? '100%' : '50%';

    const ref = this.dialogService.open(EmailDialogComponent, {
      header: 'Ponerse en contacto',
      width: width,
      height: '100%',
      maximizable: true,
    });
  }




  scrollDown() {
    this.el.nativeElement.querySelector('#myDiv').scrollTop += 200;
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
}
