import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from 'src/app/services/items-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  okValues: Array<string>;
  constructor(
    public itemsService: ItemsServiceService
  ) { 
    this.okValues = []
  }

  ngOnInit(): void {
    this.itemsService.changeValues.subscribe(
      data => {
        console.log(data)

      }
    )
  }

}
