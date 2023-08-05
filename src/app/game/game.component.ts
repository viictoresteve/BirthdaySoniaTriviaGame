// game.component.ts
import { Component } from '@angular/core';
import { Question } from '../game.model';
import { questions } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  selectedTeam: string = '';
  selectedCategory: string = '';
  gameStarted: boolean = false;
  questions: Question[] = questions;
  currentQuestionIndex: number = 0;
  currentQuestion: Question | null = null;
  correctAnswers: number = 0;
  answeredQuestionsIndices: number[] = [];

  showPopup: boolean = false;
  popupMessage: string = '';

  selectTeam(team: string) {
    this.selectedTeam = team;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  startGame() {
    this.shuffleArray(this.questions);
    this.gameStarted = true;
    this.currentQuestionIndex = 0;
    this.nextQuestion();
  }

  nextQuestion() {
    const filteredQuestions = this.questions.filter(
      q => q.category === this.selectedCategory
    );

    if (this.currentQuestionIndex < filteredQuestions.length) {
      this.currentQuestion = filteredQuestions[this.currentQuestionIndex];
      this.currentQuestionIndex++;
    } else {
      this.currentQuestion = null;
      this.showPopup = true;
      this.popupMessage = `${this.selectedTeam}'s final score: ${this.correctAnswers}`;
      this.correctAnswers = 0;
    }
  }

  shuffleArray(array: Question[]): Question[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  resetGame() {
    console.log('reach');
    
    this.selectedTeam = '';
    this.selectedCategory = '';
    this.gameStarted = false;
    this.showPopup = false;
    this.popupMessage = '';
    this.currentQuestionIndex = 0;
    this.currentQuestion = null;
    this.correctAnswers = 0;
  }
}