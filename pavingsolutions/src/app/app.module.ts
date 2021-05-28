import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PavingComponent } from './components/paving/paving.component';
import { ToolsComponent } from './components/tools/tools.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounselingComponent } from './components/counseling/counseling.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PavingComponent,
    ToolsComponent,
    MaintenanceComponent,
    ContactComponent,
    CounselingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
