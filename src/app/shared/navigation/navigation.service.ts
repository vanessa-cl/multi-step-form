import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navigateTo(router: Router, path: string) {
    router.navigate([`form/${path}`]);
  }
}
