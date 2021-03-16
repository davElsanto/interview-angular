import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from 'src/app/services/items-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  okValues: Array<string>;
  wrongValues: Array<string>;
  constructor(
    public itemsService: ItemsServiceService
  ) { 
    this.okValues = []
    this.wrongValues = []
  }

  ngOnInit(): void {
    this.itemsService.changeValuesOk.subscribe(
      data => this.okValues = data
    )

    this.itemsService.changeValuesWrong.subscribe(
      data => this.wrongValues = data
    )
  }

}
