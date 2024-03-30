import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [

  ]

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens')||'[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  createItem(item: string) {
    const id = this.listaDeCompra.length + 1;
    const items: Item = {
      id: id,
      nome: item,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return items
  }

  updateList(item: string) {
    const items = this.createItem(item);
    this.listaDeCompra.push(items);
    this.updateLocalStorege();
  }

  editItemList(itemOld: Item, nameEditItem: string) {
    const itemEdit: Item = {
      id: itemOld.id,
      nome: nameEditItem,
      data: itemOld.data,
      comprado: itemOld.comprado
    }
    const id = itemOld.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEdit);
    this.updateLocalStorege();
  }

  updateLocalStorege(){
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra))
  }
}
