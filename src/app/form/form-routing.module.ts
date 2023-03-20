import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { FormComponent } from './form.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PickAddOnsComponent } from './pick-add-ons/pick-add-ons.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      { path: 'personal-info', component: PersonalInfoComponent },
      { path: 'select-plan', component: SelectPlanComponent },
      { path: 'pick-add-ons', component: PickAddOnsComponent },
      { path: 'finishing-up', component: FinishingUpComponent },
      { path: 'thank-you', component: ThankYouComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
