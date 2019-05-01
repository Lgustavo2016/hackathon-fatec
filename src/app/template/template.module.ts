import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [TemplateComponent, HomeComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ],
  exports: [TemplateComponent]
})
export class TemplateModule { }
