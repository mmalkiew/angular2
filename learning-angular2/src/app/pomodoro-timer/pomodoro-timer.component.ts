import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor() {
    this.minutes = 24;
    this.seconds = 59;
    setInterval(() => this.tick(), 1000);
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    // if countdown has started
    if (this.minutes < 24 || this.seconds < 59) { 
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }

  private resetPomodoro(): void {
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'Pause';

      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetPomodoro();
        }
      }
    } 
  }
}



