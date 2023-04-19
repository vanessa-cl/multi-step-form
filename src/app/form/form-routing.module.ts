import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { FormComponent } from './form.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PickAddOnsComponent } from './pick-add-ons/pick-add-ons.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FormGuard } from '../guards/form.guard';
import { SubmitGuard } from '../guards/submit.guard';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
      {
        path: 'personal-info',
        component: PersonalInfoComponent,
        canDeactivate: [FormGuard],
      },
      {
        path: 'select-plan',
        component: SelectPlanComponent,
        canDeactivate: [FormGuard],
      },
      {
        path: 'pick-add-ons',
        component: PickAddOnsComponent,
        canDeactivate: [FormGuard],
      },
      {
        path: 'finishing-up',
        component: FinishingUpComponent,
      },
      { path: 'thank-you', component: ThankYouComponent, canActivate: [SubmitGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
