import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { ViewPdfComponent } from './pages/view-pdf/view-pdf.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent, },
    { path: 'send', component: ConfirmComponent },
    { path: 'cv', component: ViewPdfComponent },
];
