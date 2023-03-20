import { Component } from '@angular/core';
import { Step } from './step';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
  steps: Array<Step> = [
    { id: 1, description: 'Your Info' },
    { id: 2, description: 'Select Plan' },
    { id: 3, description: 'Add-Ons' },
    { id: 4, description: 'Summary' },
  ];
}
