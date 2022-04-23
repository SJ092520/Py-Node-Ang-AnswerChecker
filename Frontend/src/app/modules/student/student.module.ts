import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ExamComponent } from './exam/exam.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [


    StudentDashboardComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
