import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const phoneValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneRegex = /^09\d{9}$/;
    return phoneRegex.test(control.value) ? null : { error: true , errorMessage:'Invalid Number' };
  };
};
