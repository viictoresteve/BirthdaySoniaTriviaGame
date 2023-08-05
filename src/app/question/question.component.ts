// question.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../game.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() currentQuestion: Question | null = null;
  @Input() selectedTeam: string = ''; // Added input for team
  @Input() currentCategory: string = ''; // Added input for category
  @Input() correctAnswers: number = 0; // Added input for correct answers
  @Output() nextQuestion: EventEmitter<void> = new EventEmitter<void>();
  @Output() resetGameEmitter: EventEmitter<void> = new EventEmitter<void>();
  showPopup: boolean = false;
  popupMessage: string = '';

  checkAnswer(selectedOption: string) {
    if (this.currentQuestion) {
      if (selectedOption !== this.currentQuestion.answer) {
        this.showPopup = true;
        this.popupMessage = `Incorrect! ${this.selectedTeam} has answered ${this.correctAnswers} questions correctly.`;
      } else {
        this.onNextQuestion();
        this.correctAnswers++;
      }
    }
  }

  onNextQuestion() {
    this.showPopup = false;
    this.nextQuestion.emit();
  }

  resetGame() {
    console.log('preerere');
    
    this.showPopup = false;
    this.resetGameEmitter.emit();
    }
}