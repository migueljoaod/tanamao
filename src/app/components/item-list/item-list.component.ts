import { Component, OnInit } from '@angular/core';
import { ItemListService } from './item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: any;


  constructor(private itemListService: ItemListService) { }

  ngOnInit() {
    this.itemListService.getItems().subscribe((items: any) => {
      this.items = items.data;
      console.log(items);
    });
  }

}
