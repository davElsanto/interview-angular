import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interview-ds';
  correctValues: Array<string>;
  wrongValues: Array<string>;
  constructor(){
    this.correctValues = []
    this.wrongValues = []
  }
  /**
   * Actualiza los valores de array en padre
   * @param codes Array de string en la posicion 0 -> valores correctos, posicion 1 -> valores incorrectos
   */
  checkArticleCodes(codes: Array<string[]>):void{
    this.correctValues = codes[0]
    this.wrongValues = codes[1]
  }
}
