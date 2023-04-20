import { Component, Input, OnInit } from '@angular/core';
import { AddOn } from '../add-on';
import { FormControl } from '@angular/forms';
import { FormValidationsService } from '../../form-validations.service';

@Component({
  selector: 'app-add-on-checkbox',
  templateUrl: './add-on-checkbox.component.html',
  styleUrls: [
    './add-on-checkbox.component.sass',
    '../../../sass/utilities/_common.sass',
  ],
})
export class AddOnCheckboxComponent implements OnInit {
  @Input() addOn: AddOn;
  @Input() control: FormControl;
  isYearlyBilling: boolean;

  constructor(private formValidations: FormValidationsService) {}

  ngOnInit(): void {
    this.isYearlyBilling = this.formValidations.returnSelectedBilling;
  }

  selectedCheckboxStyle() {
    return {
      'selected-option': this.control.value,
    };
  }
}
