import { Component, OnInit } from '@angular/core';
export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
  repository: string;
}
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  projects: Project[] = [
    {
      id: 1, title: "Task App",
      description: "Task App es una aplicación de recordatorios y lista de tareas maravillosamente" +
        "simple y gratuita que te ayudará a mantener tu ajetreada vida organizada todos los días." +
        "Tasks prioriza la facilidad de uso sobre la funcionalidad compleja, por lo que no importa" +
        "quién sea o qué haga, ¡Tasks puede ayudarlo!",
      url: "https://task-application-app.netlify.app/",
      image: "/assets/screen/taskapp.png", repository: "https://github.com/fidelhuarcaya/task-app"
    },
    {
      id: 2, title: "Classroom App",
      description: "que ayuda a los maestros a crear y organizar tareas rápidamente, proporcionar" +
        "comentarios de manera eficiente y comunicarse fácilmente con sus clases. Classroom ayuda" +
        "a los estudiantes a organizar su trabajo .",
      url: "https://classroom-alumnos.netlify.app/",
      image: "/assets/screen/classroomapp.png",
      repository: "https://github.com/fidelhuarcaya/angular11-rest-api"
    },
   
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
