import {
  CanDeactivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IFormDeactivate } from './iform.deactivate';

export const FormGuard: CanDeactivateFn<IFormDeactivate> = (
  component: IFormDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): Observable<boolean> | boolean => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
