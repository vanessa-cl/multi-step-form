import { Component, OnInit } from '@angular/core';
import { FormValidationsService } from '../form-validations.service';
import { Router } from '@angular/router';
import { AddOn } from '../pick-add-ons/add-on';
import { Form } from '../form';

@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrls: [
    './finishing-up.component.sass',
    '../../sass/utilities/_common.sass',
  ],
})
export class FinishingUpComponent implements OnInit {
  form: Form;

  constructor(
    private formValidation: FormValidationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formValidation.returnAllForms;
  }

  submitForm() {
    console.log('submit');
    this.router.navigate(['/form/thank-you']);
  }

  changeBilling() {
    return this.form.selectedPlan.isYearlyBilling;
  }

  sumTotalValue() {
    const isYearlyBilling = this.changeBilling();
    const sumAddOns = this.form.selectedAddOns
      .map((addOn: AddOn) =>
        isYearlyBilling ? addOn.yearlyValue : addOn.monthlyValue
      )
      .reduce(
        (total: number, current: number) => (current ? total + current : total),
        0
      );
    return isYearlyBilling
      ? sumAddOns + this.form.selectedPlan.planOption.yearlyValue
      : sumAddOns + this.form.selectedPlan.planOption.monthlyValue;
  }
}
