import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { DynamicForm, DynamicFormControlType } from '../../models/dynamic-form.model';
import { FORM_ERROR } from '../../utils/dynamic-form-custom-error';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  form !: FormGroup;
  fromControlType = DynamicFormControlType
  formErrors = FORM_ERROR;
  @Input() config!: DynamicForm;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    let group: any = {};
    this.config?.formContols.forEach(control => {
      if (control.type === this.fromControlType.ARRAY) {
        group[control.name + 'Array'] = new FormControl(control.value || []);
        group[control.name] = control.validations ?
          new FormControl('', control.validations) :
          new FormControl('');
      } else {
        group[control.name] = control.validations ?
          new FormControl(control.value || '', control.validations) :
          new FormControl(control.value || '');
      }
    });
    return new FormGroup(group);
  }

  onSubmit(): void {
    this.config?.submitAction(this.form.value);
  }

  addToControl(formControlName: string) {
    const control = this.form.get(formControlName + 'Array');
    if (this.form.get(formControlName)?.valid) {
      (control?.value as Array<any>).push(this.form.get(formControlName)?.value);
    }
  }

  getError(errors: ValidationErrors | null | undefined) {
    const data = { ...errors }
    let errorText = '';
    for (const [key, value] of Object.entries(FORM_ERROR)) {
      console.log(`${key}: ${value}`);
      Object.keys(data).forEach(element => {
        if (element === key) {
          errorText += value
        }
      });
    }

    return errorText;
  }
}


