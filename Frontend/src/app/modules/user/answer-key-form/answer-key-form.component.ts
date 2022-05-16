import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-key-form',
  templateUrl: './answer-key-form.component.html',
  styleUrls: ['./answer-key-form.component.css']
})
export class AnswerKeyFormComponent implements OnInit {

  constructor() { }
  questions = ['1','2','3','4','5','6','7a','7b','8a','8b','9a','9b'];
  ngOnInit(): void {
  }

}
