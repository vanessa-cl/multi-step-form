import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { SubmitService } from '../form/submit-form/submit-form.service';

export const SubmitGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean => {
  return inject(SubmitService).canActivate();
};
