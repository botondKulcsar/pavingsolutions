import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CounselingComponent } from './components/counseling/counseling.component';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { PavingComponent } from './components/paving/paving.component';
import { ToolsComponent } from './components/tools/tools.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paving', component: PavingComponent },
  { path: 'tools', loadChildren: () => import('./components/tools/tools.module').then((m) => m.ToolsModule) },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'counseling', component: CounselingComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
