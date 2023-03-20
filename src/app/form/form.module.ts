import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PickAddOnsComponent } from './pick-add-ons/pick-add-ons.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form.component';
import { StepComponent } from './sidebar/step/step.component';
import { PlanComponent } from './select-plan/plan/plan.component';
import { AddOnCheckboxComponent } from './pick-add-ons/add-on-checkbox/add-on-checkbox.component';


@NgModule({
  declarations: [
    FormComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    PickAddOnsComponent,
    FinishingUpComponent,
    ThankYouComponent,
    SidebarComponent,
    StepComponent,
    PlanComponent,
    AddOnCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule
  ]
})
export class FormModule { }
