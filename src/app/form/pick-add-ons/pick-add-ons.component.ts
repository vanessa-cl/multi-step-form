import { Component, OnInit } from '@angular/core';
import { AddOn } from './add-on';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormValidationsService } from '../form-validations.service';

@Component({
  selector: 'app-pick-add-ons',
  templateUrl: './pick-add-ons.component.html',
  styleUrls: [
    './pick-add-ons.component.sass',
    '../../sass/utilities/_common.sass',
  ],
})
export class PickAddOnsComponent implements OnInit {
  addOnsList: Array<AddOn> = [
    {
      id: 1,
      title: 'Online service',
      description: 'Access to multiplayer games',
      monthlyValue: 1,
      yearlyValue: 10,
    },
    {
      id: 2,
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthlyValue: 2,
      yearlyValue: 20,
    },
    {
      id: 3,
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthlyValue: 2,
      yearlyValue: 20,
    },
  ];

  selectedAddOns: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formValidation: FormValidationsService
  ) {}

  ngOnInit(): void {
    this.selectedAddOns = this.formBuilder.group({
      addOns: new FormArray([], this.formValidation.validateMinChecked),
    });

    this.addCheckboxes();

    if (this.formValidation.restoreForm('selectedAddOns') !== undefined) {
      this.selectedAddOns = this.formValidation.restoreForm('selectedAddOns');
    }

    this.selectedAddOns.statusChanges.subscribe((status: string) => {
      if (status === 'VALID') {
        this.formValidation.getSelectedOptions(
          this.selectedAddOns,
          this.addOnsList
        );
        this.formValidation.storeForm(this.selectedAddOns, 'selectedAddOns');
      }
    });
  }

  get optionsForm() {
    return this.selectedAddOns.controls['addOns'] as FormArray;
  }

  getOptionControl(index: number) {
    return this.optionsForm.controls[index] as FormControl;
  }

  private addCheckboxes() {
    this.addOnsList.forEach(() =>
      this.optionsForm.push(new FormControl(false))
    );
  }
}
