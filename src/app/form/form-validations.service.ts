import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationsService {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }

  validationMessages = (validatorName: string) => {
    const messages: { [index: string]: string } = {
      required: 'This field is required',
      minlength: 'Name must contain at least 3 characters',
      maxlength: 'Name must contain a maximum of 30 characters',
      email: 'Invalid email',
      pattern: 'Invalid phone number',
    };
    return messages[validatorName];
  };

  storeForm(formGroup: FormGroup, formName: string): void {
    this.form.addControl(formName, formGroup);
  }

  restoreForm(formName: string): FormGroup {
    return this.form.controls[formName] as FormGroup;
  }
}
