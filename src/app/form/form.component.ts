import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass', '../sass/utilities/_common.sass'],
})
export class FormComponent implements OnInit {

  ngOnInit(): void {
    // plan: [null, [Validators.required]],
    //   monthlyBilling: [false, [Validators.required]],
    //   addOns: [null, [Validators.required]],
    //   totalValue: [0, [Validators.required]],
  }
}
