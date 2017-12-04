import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  aNumbers : number[] = [];
  bNumbers : number[] = [];

  constructor() { }

  generateNumber() : number {
    return Math.floor(Math.random() * 9);
  }

  alphaAdd (num: number) {
    this.aNumbers.
    push(num);
  }

  betaAdd (num: number) {
    this.bNumbers.push(num);
  }

}
