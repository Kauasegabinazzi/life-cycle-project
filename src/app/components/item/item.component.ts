import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy{

  faPen = faPen;
  faTrash = faTrash
  @Input() item!: Item;
  @Output() emitItem = new EventEmitter();
  @Output() emitIdDelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('init');
  }
  // depois do onChanges preparar a informação, o init tras as informações pra tela

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');

  }
  // on changes é antes do init pois prepara a informação

  ngOnDestroy(): void {
    console.log('destroy');
  }
  //Destroy = chamado momentos antes de ser retirado da tela, usado para limpar a tela

  edit() {
    this.emitItem.emit(this.item);
  }

  changeForBuy(item: Item){
    if(item.comprado == false){
      item.comprado = true;
    }
    else{
      item.comprado = false;
    }
 
    this.emitItem.emit(this.item);
  }

  deleteItem(){
    this.emitIdDelete.emit(this.item.id);
  }
}
