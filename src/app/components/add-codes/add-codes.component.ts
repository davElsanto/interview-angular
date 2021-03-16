import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-codes',
  templateUrl: './add-codes.component.html',
  styleUrls: ['./add-codes.component.scss']
})
export class AddCodesComponent implements OnInit {

  public inputValue: string;

  @Output() codes = new EventEmitter<Array<string[]>>();

  constructor() { 
    this.inputValue = ""
  }

  ngOnInit(): void {
  }

  sendData():void{
    //valores sin espacios ni puntos
    let values = this.inputValue.replace(/\.|\s/g, '').split(',')
    //console.log(values)
    //expresion regular para validar que exitan unicamente 8 caracteres numericos
    let regex = /[0-9]{8}/
    let okValues = Array<string>()
    let wrongValues = Array<string>()


    values.forEach(element => 
        regex.test(element)? okValues.push(element):wrongValues.push(element)
      );

    console.log("ok values : ", okValues)
    console.log("bad values: ",wrongValues)

    this.codes.emit([okValues, wrongValues])
  }

}
