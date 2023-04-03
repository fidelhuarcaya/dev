import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { EmailDialogComponent } from 'src/app/shared/email-dialog/email-dialog.component';
import Utils from 'src/app/shared/utils/commons.utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  texto = "Software developer";
  longitudTextoMostrado = 0;
  mostrarCursor = true;
  
  constructor(public dialogService: DialogService) { }
  
  ngOnInit(): void {
    this.mostrarTexto();
  }
  
  mostrarTexto() {
    if (this.longitudTextoMostrado < this.texto.length) {
      this.longitudTextoMostrado++;
      setTimeout(() => {
        this.mostrarTexto();
        this.mostrarCursor = !this.mostrarCursor; // alternar el cursor
        if (this.longitudTextoMostrado === this.texto.length) {
          this.mostrarCursor = false; // desactivar el cursor al final del texto
        }
      }, 200);
    }
  }
  show() {
    const ref = this.dialogService.open(EmailDialogComponent, {
        header: 'Ponerse en contacto',
        width: '70%',
        height:'100%',
        maximizable:true,
    });
}


showCV(){
Utils.abrirPDF('./assets/files/CV_FIDEL_HUARCAYA_.pdf');
}
}
