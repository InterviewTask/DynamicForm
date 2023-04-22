import { Validators } from "@angular/forms";
import { DynamicForm, DynamicFormControlType } from "./dynamic-form.model";
import { phoneValidator } from "../utils/dynamic-form-custom-validation";

export const DYNAMIC_FORM_CONFIG : DynamicForm = {
  name: 'Test Form',
  submitButtonName:'Create New Factory',
  direction:'ltr',
  submitAction: (formData:any)=>{
    console.log('Form Data: ',formData);
  },
  formContols:[
    {
      name:'firstName',
      title:'First name',
      label:'First name',
      icon: 'person',
      validations:[Validators.required],
      type: DynamicFormControlType.TEXTBOX,
    },
    {
      name:'lastName',
      title:'Last name',
      label:'Last name',
      icon: 'person',
      validations:[Validators.required],
      type: DynamicFormControlType.TEXTBOX,
    },
    {
      name:'companyName',
      title:'Cpmpany',
      label:'Cpmpany',
      icon: 'person',
      type: DynamicFormControlType.TEXTBOX,
    },
    {
      name:'panel',
      title:'Panel',
      label:'Panel',
      icon: 'person',
      metaData:{
        options:[
          {name:'Panel 1',value:'panel_1'},
          {name:'Panel 2',value:'panel_2'},
          {name:'Panel 3',value:'panel_3'},
        ]
      },
      type: DynamicFormControlType.SELECT,
    },
    {
      name:'gender',
      title:'Gender',
      label:'Gender',
      icon: 'person',
      metaData:{
        options:[
          {name:'male',value:'male'},
          {name:'female',value:'female'},
        ]
      },
      type: DynamicFormControlType.SELECT,
    },
    {
      name:'phone',
      title:'Phone',
      label:'Phone',
      icon: 'person',
      validations:[phoneValidator],
      type: DynamicFormControlType.ARRAY,
    },
    {
      name:'email',
      title:'Email',
      label:'Email',
      icon: 'person',
      validations:[Validators.email],
      type: DynamicFormControlType.EMAIL,
    },
    {
      name:'birthDate',
      title:'Birth Date',
      label:'Birth Date',
      icon: 'person',
      type: DynamicFormControlType.DATE,
    },
    {
      name:'description',
      title:'Description',
      label:'Description',
      icon: 'person',
      type: DynamicFormControlType.TEXTAREA,
    },
  ]
}
