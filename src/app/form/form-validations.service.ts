import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { AddOn } from './pick-add-ons/add-on';

@Injectable({
  providedIn: 'root',
})
export class FormValidationsService {
  form: FormGroup;
  selectedAddOns: Array<AddOn>;

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

  get returnForm() {
    this.form.value.selectedAddOns = this.selectedAddOns
    return this.form.value
  }

  validateMinChecked(control: AbstractControl, min = 1) {
    const totalChecked = control.value.reduce(
      (total: number, current: number) => (current ? total + current : total),
      0
    );
    return totalChecked >= min ? null : { required: true };
  }

  getSelectedOptions(formGroup: FormGroup, addOnsList: Array<AddOn>) {
    const options = formGroup.value.addOns
      .map((checked: boolean, index: number) =>
        checked ? addOnsList[index] : null
      )
      .filter((value: any) => value !== null);
    this.selectedAddOns = options;
  }
}
