import { Component, OnInit } from '@angular/core';
import { DYNAMIC_FORM_CONFIG } from './models/dynamic-form.config';
import { DynamicForm } from './models/dynamic-form.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  config!:DynamicForm;
  constructor() {
    this.config = DYNAMIC_FORM_CONFIG;
   }

  ngOnInit(): void {
  }

}
