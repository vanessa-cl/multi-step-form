import { Component, Input } from '@angular/core';
import { AddOn } from '../add-on';

@Component({
  selector: 'app-add-on-checkbox',
  templateUrl: './add-on-checkbox.component.html',
  styleUrls: ['./add-on-checkbox.component.sass']
})
export class AddOnCheckboxComponent {
  @Input() addOn: AddOn;
}
