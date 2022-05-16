import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerKeyFormComponent } from './answer-key-form/answer-key-form.component';

const routes: Routes = [
  {
    path: 'answer-key',
    component: AnswerKeyFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
