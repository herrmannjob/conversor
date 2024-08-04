import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'conversor'
  currentStep = 1;

  goToStep(step: number) {
    this.currentStep = step;
  }
}
