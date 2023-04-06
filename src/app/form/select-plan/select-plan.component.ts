import { Component, OnInit } from '@angular/core';
import { Plan } from './plan';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: [
    './select-plan.component.sass',
    '../../sass/utilities/_common.sass',
  ],
})
export class SelectPlanComponent implements OnInit {
  plans: Array<Plan> = [
    {
      id: 1,
      title: 'Arcade',
      monthlyValue: 9,
      yearlyValue: 90,
      image: '../../../../assets/images/icon-arcade.svg',
    },
    {
      id: 2,
      title: 'Advanced',
      monthlyValue: 12,
      yearlyValue: 120,
      image: '../../../../assets/images/icon-advanced.svg',
    },
    { id: 3, title: 'Pro', monthlyValue: 15, yearlyValue: 150, image: '../../../../assets/images/icon-pro.svg' },
  ];

  selectedPlan: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.selectedPlan = this.formBuilder.group({
      planOption: [null, Validators.required],
      isYearlyBilling: [false, Validators.required],
    });
  }

  get optionForm() {
    return this.selectedPlan.controls['planOption'] as FormControl;
  }

  selectedBillingStyle(label: string) {
    return {
      highlight:
        label === 'yearly'
          ? this.selectedPlan.value.isYearlyBilling
          : !this.selectedPlan.value.isYearlyBilling,
    };
  }

}
