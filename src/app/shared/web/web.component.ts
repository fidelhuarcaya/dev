import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Project } from 'src/app/core/interfaces/project';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {
  isMobile = false;
  projects: Project[] = [
    {
      id: 1, title: "Task App",
      description: "Task App is a wonderfully to-do list and reminder app" +
      "simple and free that will help you keep your busy life organized every day." +
      "Tasks prioritizes ease of use over complex functionality, so it doesn't matter" +
      "whoever you are or what you do, Tasks can help you!",
      url: "https://task-application-app.netlify.app/",
      image: "/assets/screen/taskapp.png", repository: "https://github.com/fidelhuarcaya/task-app"
    },
    {
      id: 2, title: "Classroom App",
      description: "That helps teachers quickly create and organize assignments, provide" +
      "Comment efficiently and communicate easily with your classes. Classroom helps" +
      "to students to organize their work.",
      url: "https://classroom-alumnos.netlify.app/",
      image: "/assets/screen/classroomapp.png",
      repository: "https://github.com/fidelhuarcaya/angular11-rest-api"
    },
   
  ];
  constructor(private deviceService: DeviceDetectorService,) { }

  ngOnInit(): void {this.isMobile = this.deviceService.isMobile();
  }

}
