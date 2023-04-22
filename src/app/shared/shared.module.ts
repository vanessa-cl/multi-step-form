import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NavigationService } from './navigation/navigation.service';


@NgModule({
  declarations: [
    ErrorMessageComponent,
    NavigationService
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
