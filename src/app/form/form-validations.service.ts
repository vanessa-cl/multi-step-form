import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormValidationsService {
  constructor() {}

  validationMessages = (validatorName: string) => {
    const messages: { [index: string]: string } = {
      required: 'This field is required',
      minlength: 'Name must contain at least 3 characters',
      maxlength: 'Name must contain a maximum of 30 characters',
      email: 'Invalid email',
      pattern: 'Invalid phone number',
    };
    return messages[validatorName];
  };
}
