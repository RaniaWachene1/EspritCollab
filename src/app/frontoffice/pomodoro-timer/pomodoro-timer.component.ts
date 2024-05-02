import { Component, OnInit } from '@angular/core';
import { Pomodoro } from '../../../models/pomodoro.model';
import { RevisionService } from '../revision.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent implements OnInit {
  pomodoro: Pomodoro = {
    id: 0,
    startTime: new Date(),
    endTime: new Date(),
    breakTime: 0,
    status: 'Stopped'
  };
  timer: any;
  remainingTime: number = 25 * 60; // 25 minutes in seconds
  isRunning: boolean = false;
  cycleCount: number = 0; // Pour suivre le nombre de cycles

  constructor(private pomodoroService: RevisionService) { }

  ngOnInit(): void {
  }

  startPomodoro(): void {
    if (this.cycleCount < 5) {
      this.pomodoro.status = 'Running';
      this.remainingTime = 25 * 60; // Reset pour 25 minutes
      this.startTimer();
    }
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        if (this.pomodoro.status === 'Running') {
          this.switchToBreak();
        } else {
          this.switchToWork();
        }
      }
    }, 1000);
    this.isRunning = true;
  }

  switchToBreak(): void {
    this.cycleCount++;
    if (this.cycleCount >= 5) {
      this.stopPomodoro();
    } else {
      this.pomodoro.status = 'Paused';
      this.remainingTime = 5 * 60; // 5 minutes break
      this.startTimer();
    }
  }

  switchToWork(): void {
    this.pomodoro.status = 'Running';
    this.remainingTime = 25 * 60; // 25 minutes work
    this.startTimer();
  }

  stopPomodoro(): void {
    clearInterval(this.timer);
    this.pomodoro.endTime = new Date();
    this.pomodoro.status = 'Stopped';
    this.isRunning = false;
    this.cycleCount = 0; // Reset des cycles
  }

  formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  pausePomodoro(): void {
    clearInterval(this.timer);
    this.pomodoro.status = 'Paused';
    this.remainingTime = 5 * 60; // 5 minutes in seconds
    this.startTimer();
  }


}
