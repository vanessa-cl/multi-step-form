import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { AddOn } from './pick-add-ons/add-on';
import { Form } from './form';

@Injectable({
  providedIn: 'root',
})
export class FormValidationsService {
  form: FormGroup;
  selectedAddOns: Array<AddOn>;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }

  validationMessages = (validatorName: string): string => {
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

  get returnAllForms(): Form {
    this.form.value.selectedAddOns = this.selectedAddOns;
    return this.form.value;
  }

  get returnSelectedBilling(): boolean {
    return this.form.value.selectedPlan.isYearlyBilling;
  }

  validateMinChecked(control: AbstractControl, min = 1) {
    const totalChecked = control.value.reduce(
      (total: number, current: number) => (current ? total + current : total),
      0
    );
    return totalChecked >= min ? null : { required: true };
  }

  getSelectedOptions(formGroup: FormGroup, addOnsList: Array<AddOn>): void {
    const options = formGroup.value.addOns
      .map((checked: boolean, index: number) =>
        checked ? addOnsList[index] : null
      )
      .filter((value: any) => value !== null);
    this.selectedAddOns = options;
  }

  isFormValid(formGroup: FormGroup): boolean {
    return formGroup.status === 'VALID' ? true : false;
  }

  validateAllForms(formStepsCount = 3): boolean {
    let isAllFormsInvalid: boolean = true;
    const controls = this.form.controls;
    const formsValues = Object.values(controls);
    if (formsValues.length === formStepsCount) {
      isAllFormsInvalid = formsValues
        .map((item) => this.isFormValid(item as FormGroup))
        .some((item) => item === false);
    }
    return isAllFormsInvalid ? false : true;
  }
}
