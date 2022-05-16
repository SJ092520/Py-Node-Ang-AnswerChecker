import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { AnswerKeyFormComponent } from './answer-key-form/answer-key-form.component';


@NgModule({
  declarations: [
    HomeComponent,
    AnswerKeyFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
