import { Injectable } from '@angular/core';
import { FormValidationsService } from '../form-validations.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SubmitService {
  constructor(
    private formValidation: FormValidationsService,
    private router: Router
  ) {}

  canActivate() {
    if (this.formValidation.validateAllForms()) {
      return true;
    }
    this.router.navigate(['/form']);
    return false;
  }
}
