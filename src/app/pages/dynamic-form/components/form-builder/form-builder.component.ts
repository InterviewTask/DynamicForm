import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicForm, DynamicFormControlType } from '../../models/dynamic-form.model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  form !: FormGroup;
  fromControlType=DynamicFormControlType
  @Input() config!:DynamicForm;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    let group: any = {};
    this.config?.formContols.forEach(control => {
      group[control.name] = control.validations ?
      new FormControl(control.value || '', control.validations) :
      new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }

  onSubmit(): void {
    console.log(this.form.value);
    // this.config?.submitAction(this.form.value);
  }

}


