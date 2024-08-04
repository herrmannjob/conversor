import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {
  conversionType: string | null = null;

  constructor(private router: Router) {}

  proceed() {
    if (this.conversionType) {
      this.router.navigate(['/step-two'], { queryParams: { type: this.conversionType } });
    }
  }
}
