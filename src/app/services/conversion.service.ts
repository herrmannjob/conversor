import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  private romanNumerals: { [key: string]: number } = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  // Converte números romanos para inteiros
  romanToInt(roman: string): string {
    let num = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
      const char = roman[i];
      const value = this.romanNumerals[char as keyof typeof this.romanNumerals];

      if (value < prevValue) {
        num -= value;
      } else {
        num += value;
      }
      prevValue = value;
    }

    return num.toString();
  }

  // Converte inteiros para números romanos
  intToRoman(num: number): string {
    if (num <= 0 || num >= 4000) {
      return 'Número fora do intervalo (1-3999)';
    }

    const romanNumerals: { value: number, numeral: string }[] = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];

    let roman = '';

    for (const { value, numeral } of romanNumerals) {
      while (num >= value) {
        roman += numeral;
        num -= value;
      }
    }

    return roman;
  }
}
