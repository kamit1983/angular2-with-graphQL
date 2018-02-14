import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-dynamic-form-view',
  templateUrl: './dynamic-form-view.component.html',
  styleUrls: ['./dynamic-form-view.component.css'],
  providers:  [QuestionService]
})
export class DynamicFormViewComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
  ngOnInit() {
  }

}
