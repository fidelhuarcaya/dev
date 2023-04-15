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
          'Development of microservices with Spring Boot, JPA and Postgres.',
          'Stress tests with Jmeter to the endpoints.',
          'Microservices test with JUnit',
          'Documentation of microservices with OpenApi',
          'Code QA with Sonarqube and SonarLint.',
          'Wizard generation with Angular, API consumption, FormReactive',
          'SCRUM Methodology'
        ]
      },
      {
        status: 'Java Developer, Android',
        subtitle: 'Alpha Neo', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg',
        header: '2022',
        descriptions: [
          'In-app purchase integration.',
          'Development of Android applications and updates thereof.',
          'Bug fixes.'
        ]
      },
      
    ];
  }

}
