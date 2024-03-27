import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  faPen = faPen;
  faTrash = faTrash
  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
    console.log('init');
  }
  // depois do onChanges preparar a informação, o init tras as informações pra tela

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');

  }
  // on changes é antes do init pois prepara a informação


}
