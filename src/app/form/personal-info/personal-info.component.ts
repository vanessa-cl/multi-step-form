import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidationsService } from '../form-validations.service';
import { IFormDeactivate } from 'src/app/guards/iform.deactivate';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: [
    './personal-info.component.sass',
    '../../sass/utilities/_common.sass',
  ],
})
export class PersonalInfoComponent implements OnInit, IFormDeactivate {
  personalInfo: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formValidation: FormValidationsService
  ) {}

  ngOnInit(): void {
    this.personalInfo = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
          ),
        ],
      ],
    });

    if (this.formValidation.restoreForm('personalInfo') !== undefined) {
      this.personalInfo = this.formValidation.restoreForm('personalInfo');
    }

    this.personalInfo.statusChanges.subscribe((status: string) => {
      if (status === 'VALID') {
        return this.formValidation.storeForm(this.personalInfo, 'personalInfo');
      }
    });
  }

  validateFields(field: string): boolean {
    const checkField = this.personalInfo.get(field);
    if (checkField?.touched && checkField?.errors) {
      return true;
    }
    return false;
  }

  checkErrorMessage(field: string): string {
    const checkField = this.personalInfo.get(field);
    if (checkField?.errors) {
      const checkErrors = (<any>Object).keys(checkField?.errors);
      return this.formValidation.validationMessages(checkErrors[0]);
    }
    return '';
  }

  canDeactivate(): boolean {
    if (this.formValidation.isFormValid(this.personalInfo)) {
      return true;
    }
    this.personalInfo.markAllAsTouched();
    return false;
  }
}
