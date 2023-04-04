import { Component, Input, OnInit } from '@angular/core';
import { Step } from '../step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.sass'],
})
export class StepComponent implements OnInit {
  @Input() step: Step;

  ngOnInit() {
  }
}
