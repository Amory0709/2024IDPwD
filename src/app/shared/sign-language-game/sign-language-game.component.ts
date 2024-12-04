import { Component, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HandGesturesComponent } from '../hand-gestures/hand-gestures.component';
import { CommonModule } from '@angular/common';
import { PredefinedHandposes } from '../hand-gestures/handpose.types';
import { distinctUntilChanged, map, throttleTime } from 'rxjs/operators';
import { Router } from '@angular/router';


export interface GameSetting {
  levelTitle: string;
  nextStepLink: string;
  requiredGestures: GameWord[];
}

export interface GameWord {
  word: string;
  gestures: PredefinedHandposes[];
  isCorrect?: boolean;
}

@Component({
  selector: 'app-sign-language-game',
  standalone: true,
  imports: [
    CommonModule,
    HandGesturesComponent
  ],
  templateUrl: './sign-language-game.component.html',
  styleUrl: './sign-language-game.component.scss'
})
export class SignLanguageGameComponent implements AfterViewInit, OnChanges {
  @ViewChild(HandGesturesComponent) handGesturesComponent!: HandGesturesComponent;
  @Input() gameSetting!: GameSetting;
  progress: number = 0;
  isWon: boolean = false;
  // TODO: timer

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterViewInit(): void {
    this.handGesturesComponent?.handpose$?.pipe(
      map(hands => hands.map(hand => hand.handpose)),
    ).pipe(distinctUntilChanged()).subscribe((hands) => {

      if(!this.gameSetting.requiredGestures.length)return;
      if(this.isWon)return;
      
      const targetGesture = this.gameSetting.requiredGestures[this.progress];
      if (hands.some(hand => targetGesture.gestures.includes(hand))) {
        this.progress++;
        console.log(this.progress);
      }

      if (this.progress === this.gameSetting.requiredGestures.length) {
        this.isWon = true;
      }
    });
  }

  nextLevel(): void {
    if (!this.gameSetting.nextStepLink) return;
    this.router.navigate([this.gameSetting.nextStepLink]);
  }

}