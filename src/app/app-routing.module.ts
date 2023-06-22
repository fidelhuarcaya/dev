import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { ViewPdfComponent } from './core/components/view-pdf/view-pdf.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'send', component: ConfirmComponent },
  { path: 'cv', component: ViewPdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
