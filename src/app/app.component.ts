import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Shopping List';
  shoppingList!: Array<Item>
  itemForEdit! : Item

  constructor(private list: ListaDeCompraService) { }

  ngOnInit(): void {
    this.shoppingList = this.list.getListaDeCompra();
    console.log(this.shoppingList);

  }

  ngDoCheck(): void {
    console.log('verifando tudo')
    this.list.updateLocalStorege();
  }
  // verifica qualquer verificação dentro de um componente - defeito = escuta todas as alterações - pode perder performace
  // Exatamente. Este gancho é caro para a aplicação pois utiliza um mecanismo de detecção de alterações personalizada, que verifica qualquer mudança que houver no componente. Então seu uso deve ser responsável para que não haja perda de performance.
  // ngChange detecta apenas as alterações de entradas de um componente - @Input

  edit(item: Item) {
    this.itemForEdit = item;
  }

  deleteItem(id: number){
    const index = this.shoppingList.findIndex((item) => item.id === id);
    this.shoppingList.splice(index, 1);
  }

  clearList(){
    // this.shoppingList = [];
  }
}
