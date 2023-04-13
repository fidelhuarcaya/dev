import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  events!: any[];

  isMobile=false;
  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    
    this.events = [
      {
        status: 'Full Stack developer Java/Angular',
        subtitle: 'CEIRI DIGITAL SOLUTION',
        icon: 'pi pi-cog',
        color: '#673AB7',
        header: '2023',
        descriptions: [
          'Desarrollo de microservicios con Spring Boot, JPA y Postgres.',
          'Pruebas de estrés con Jmeter a los endpoint.',
          'Test con JUnit de los microservicios',
          'Documentación de los microservicios con OpenApi',
          'QA de código con Sonarqube y SonarLint.',
          'Generación de Wizard con Angular, consumo de apis, FormReactive',
          'Metodología SCRUM'
        ]
      },
      {
        status: 'Java Developer, Android',
        subtitle: 'Alpha Neo', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg',
        header: '2022',
        descriptions: [
          'Integración de compras en la aplicación.',
          'Desarrollo de aplicaciones Android y actualizaciones de la misma.',
          'Correción de bugs.'
        ]
      },
      
    ];
  }

}
