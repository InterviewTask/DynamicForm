import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';


@NgModule({
  declarations: [
    DynamicFormComponent,
    FormBuilderComponent
  ],
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DynamicFormModule { }
