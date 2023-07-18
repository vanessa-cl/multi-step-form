import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NavigationService } from './navigation/navigation.service';
import { NavFooterComponent } from './nav-footer/nav-footer.component';


@NgModule({
  declarations: [
    ErrorMessageComponent,
    NavFooterComponent,
    NavigationService
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
