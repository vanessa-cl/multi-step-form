import { Component } from '@angular/core';
import { Step } from './step';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
  steps: Array<Step> = [
    { id: 1, description: 'Your Info', route: "/form/personal-info" },
    { id: 2, description: 'Select Plan', route: "/form/select-plan" },
    { id: 3, description: 'Add-Ons', route: "/form/pick-add-ons" },
    { id: 4, description: 'Summary', route: "/form/finishing-up" },
  ];
}
