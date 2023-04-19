import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendEmailComponent } from './pages/send-email/components/send-email/send-email.component';
import { NotFoundComponent } from './core/error/not-found/not-found.component';
import { AppLayoutComponent } from './core/components/layout/app-layout/app-layout.component';

const routes: Routes = [
  { path: '', component: AppLayoutComponent , pathMatch: 'full'},
  { path: 'send', component: SendEmailComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo:'not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
