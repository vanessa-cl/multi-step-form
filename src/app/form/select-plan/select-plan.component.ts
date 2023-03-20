import { Component } from '@angular/core';
import { Plan } from './plan';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.sass'],
})
export class SelectPlanComponent {
  plans: Array<Plan> = [
    {
      id: 1,
      title: 'Arcade',
      monthlyValue: 9,
      yearlyValue: 90,
      image: 'image',
    },
    {
      id: 2,
      title: 'Advanced',
      monthlyValue: 12,
      yearlyValue: 120,
      image: 'image',
    },
    { id: 3, title: 'Pro', monthlyValue: 15, yearlyValue: 150, image: 'image' },
  ];
}
