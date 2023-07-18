import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/shared/navigation/navigation.service';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.sass'],
})
export class NavFooterComponent {
  @Input() previousRoute: string;
  @Input() nextRoute: string;

  constructor(public router: Router, public navigation: NavigationService) {}

  submitForm() {
    console.log('submit');
    this.router.navigate(['/form/thank-you']);
  }
}
