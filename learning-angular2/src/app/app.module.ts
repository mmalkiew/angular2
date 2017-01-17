import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PomodoroTimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [PomodoroTimerComponent]
})
export class AppModule { }
