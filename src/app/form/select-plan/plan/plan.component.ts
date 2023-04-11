import { Component, Input, OnInit } from '@angular/core';
import { Plan } from '../plan';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.sass', '../../../sass/utilities/_common.sass'],
})
export class PlanComponent implements OnInit {
  @Input() plan: Plan;
  @Input() control: FormControl;
  @Input() isYearlyBilling: boolean;

  ngOnInit(): void {
    console.log(this.control);
  }

  selectedPlanStyle() {
    return {
      'selected-option': this.control.value === this.plan,
    };
  }
}
