import { PersonalInfo } from './personal-info/personal-info';
import { AddOn } from './pick-add-ons/add-on';
import { Plan } from './select-plan/plan';

export type Form = {
  personalInfo: PersonalInfo;
  selectedPlan: { isYearlyBilling: boolean; planOption: Plan };
  selectedAddOns: Array<AddOn>;
};
