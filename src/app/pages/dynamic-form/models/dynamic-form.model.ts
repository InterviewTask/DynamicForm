import { Validator } from "@angular/forms";

export interface DynamicForm {
    name: string;
    submitAction: any;
    formContols: DynamicFormControls[];
    submitButtonName:string;
}

export interface DynamicFormControls {
    name: string;
    hint?: string;
    label?: string;
    title?: string;
    type: DynamicFormControlType;
    icon?: string;
    validations?: Validator[];
}

export enum DynamicFormControlType {
    TEXT_BOX,
    NUMBER,
    EMAIL,
    PASSWORD,
    PHONE,
    DATE,
    SELECT,
    TIME,
    TEXTAREA,
    CHECK_BOX,
    RADIO_BOX
}
