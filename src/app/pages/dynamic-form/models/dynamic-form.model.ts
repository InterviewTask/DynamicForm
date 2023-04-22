import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

export interface DynamicForm {
    name: string;
    submitAction: any;
    formContols: DynamicFormControls[];
    submitButtonName:string;
    direction : 'rtl'| 'ltr';
}

export interface DynamicFormControls {
    name: string;
    hint?: string;
    label?: string;
    title?: string;
    type: DynamicFormControlType;
    icon?: string;
    metaData?:any;
    value?:any;
    validations?: ((control: AbstractControl<any, any>) => ValidationErrors | null)[];
}

export enum DynamicFormControlType {
    TEXTBOX,
    NUMBER,
    EMAIL,
    PASSWORD,
    PHONE,
    DATE,
    SELECT,
    TIME,
    TEXTAREA,
    CHECKBOX,
    RADIOBOX,
    ARRAY
}
