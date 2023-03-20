import { Component } from '@angular/core';
import { AddOn } from './add-on';

@Component({
  selector: 'app-pick-add-ons',
  templateUrl: './pick-add-ons.component.html',
  styleUrls: ['./pick-add-ons.component.sass'],
})
export class PickAddOnsComponent {
  addOns: Array<AddOn> = [
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
}
