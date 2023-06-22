import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkComponent } from './pages/work/work.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { CardComponent } from './shared/card/card.component';
import { WebComponent } from './shared/web/web.component';
import { InspirationComponent } from './pages/inspiration/inspiration.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ViewPdfComponent } from './core/components/view-pdf/view-pdf.component';
import { PdfViewerService } from './core/service/pdf-viewer.service';
import { MessagesModule } from 'primeng/messages';

import { ToggleButtonModule } from 'primeng/togglebutton';
import { LoaderComponent } from './core/components/loader/loader.component';
import { EmailService } from './core/service/email.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    ConfirmComponent,
    ContactComponent,
    WorkComponent,
    ExperienceComponent,
    PresentationComponent,
    SidebarComponent,
    CardComponent,
    WebComponent,
    InspirationComponent,
    FooterComponent,
    ViewPdfComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ButtonModule,
    TimelineModule,
    CardModule,
    InputTextModule,
    ToastModule,
    MessagesModule,
    ButtonModule,
    ToggleButtonModule,
  ],
  providers: [
    MessageService,
    EmailService,
    DeviceDetectorService,
    PdfViewerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
