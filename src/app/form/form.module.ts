import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PickAddOnsComponent } from './pick-add-ons/pick-add-ons.component.spec';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonalInfoComponent,
    SelectPlanComponent,
    PickAddOnsComponent,
    FinishingUpComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule
  ]
})
export class FormModule { }
