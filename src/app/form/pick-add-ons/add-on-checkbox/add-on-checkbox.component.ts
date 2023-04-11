import { Component, Input, OnInit } from '@angular/core';
import { AddOn } from '../add-on';
import { FormControl } from '@angular/forms';

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

  ngOnInit(): void {}

  selectedCheckboxStyle() {
    return {
      'selected-option': this.control.value,
    };
  }
}
