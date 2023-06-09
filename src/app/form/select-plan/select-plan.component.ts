import { Component, OnInit } from '@angular/core';
import { Plan } from './plan';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { FormValidationsService } from '../form-validations.service';
import { IFormDeactivate } from 'src/app/guards/iform.deactivate';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/shared/navigation/navigation.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: [
    './select-plan.component.sass',
    '../../sass/utilities/_common.sass',
  ],
})
export class SelectPlanComponent implements OnInit, IFormDeactivate {
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
    {
      id: 3,
      title: 'Pro',
      monthlyValue: 15,
      yearlyValue: 150,
      image: '../../../../assets/images/icon-pro.svg',
    },
  ];

  selectedPlan: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formValidation: FormValidationsService,
    public router: Router,
    public navigation: NavigationService
  ) {}

  ngOnInit(): void {
    this.selectedPlan = this.formBuilder.group({
      planOption: [null, Validators.required],
      isYearlyBilling: [false, Validators.required],
    });

    if (this.formValidation.restoreForm('selectedPlan') !== undefined) {
      this.selectedPlan = this.formValidation.restoreForm('selectedPlan');
    }

    this.selectedPlan.statusChanges.subscribe((status: string) => {
      if (status === 'VALID') {
        this.formValidation.storeForm(this.selectedPlan, 'selectedPlan');
      }
    });
  }

  get optionForm(): FormControl {
    return this.selectedPlan.controls['planOption'] as FormControl;
  }

  selectedBillingStyle(label: string): object {
    return {
      highlight:
        label === 'yearly'
          ? this.selectedPlan.value.isYearlyBilling
          : !this.selectedPlan.value.isYearlyBilling,
    };
  }

  canDeactivate(): boolean {
    return this.formValidation.isFormValid(this.selectedPlan);
  }
}
