import { Component } from '@angular/core';
import { HeaderComponent } from '../../sections/header/header.component';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { FooterComponent } from '../../sections/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
