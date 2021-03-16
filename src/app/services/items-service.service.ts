import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsServiceService {
  private correctValues: Array<string>;
  private wrongValues: Array<string>;
  public changeValues: EventEmitter<Object> = new EventEmitter();

  constructor() {
    this.correctValues = [];
    this.wrongValues = [];
  }

  setCorrectValues(codes: Array<string>): void {
    this.correctValues = codes
    this.changeValues.emit(
      {
        value: 1,
        codes: codes
    })
  }

  getCorrectValues(): Array<string> {
    return this.correctValues;
  }

  setWrongValues(codes: Array<string>): void {
    this.wrongValues = codes;
    this.changeValues.emit(
      {
        value: 2,
        codes: codes
    })
  }

  getWrongValues(): Array<string> {
    return this.wrongValues;
  }
}
