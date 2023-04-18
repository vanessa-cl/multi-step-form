import { Component, OnInit } from '@angular/core';
import { FormValidationsService } from '../form-validations.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.sass', '../../sass/utilities/_common.sass']
})
export class FinishingUpComponent implements OnInit {
  form: FormGroup;

  constructor(private formValidation: FormValidationsService) {}

  ngOnInit(): void {
    this.form = this.formValidation.returnForm
    console.log(this.form)
  }

}
