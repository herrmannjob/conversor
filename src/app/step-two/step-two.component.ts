import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConversionService } from '../services/conversion.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  conversionType: string | null = null;
  inputValue: string = '';
  result: string | null = null;

  constructor(private route: ActivatedRoute, private conversionService: ConversionService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.conversionType = params['type'];
    });
  }

  convert() {
    if (this.conversionType === 'romano') {
      this.result = this.conversionService.romanToInt(this.inputValue);
    } else if (this.conversionType === 'inteiro') {
      const num = parseInt(this.inputValue, 10);
      if (isNaN(num)) {
        this.result = 'Valor inválido';
      } else {
        this.result = this.conversionService.intToRoman(num);
      }
    }
  }
}
