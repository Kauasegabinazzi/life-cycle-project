import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shopping List';
  shoppingList!: Array<Item>
  itemForEdit! : Item

  constructor(private list: ListaDeCompraService) { }

  ngOnInit(): void {
    this.shoppingList = this.list.getListaDeCompra();
    console.log(this.shoppingList);

  }

  edit(item: Item) {
    this.itemForEdit = item;
  }
}
