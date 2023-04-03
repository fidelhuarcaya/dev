import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { AppCardComponent } from './shared/app-card/app-card.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WebComponent } from './shared/web/web.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SideNavComponent } from './features/side-nav/side-nav.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { EmailDialogComponent } from './shared/email-dialog/email-dialog.component';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppCardComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent,
    WebComponent,
    SideNavComponent,
    EmailDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    TimelineModule,
    CardModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
  ],

  providers: [
    DialogService,
    MessageService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
