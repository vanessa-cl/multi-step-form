import { Component, Input } from '@angular/core';
import { Plan } from '../plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.sass']
})
export class PlanComponent {
  @Input() plan: Plan;
}
