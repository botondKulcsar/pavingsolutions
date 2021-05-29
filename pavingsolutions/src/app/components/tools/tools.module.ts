import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TOOLS_ROUTES } from './tools.routes';
import { ToolsComponent } from './tools.component';



@NgModule({
  declarations: [
    ToolsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TOOLS_ROUTES)
  ]
})
export class ToolsModule { }
