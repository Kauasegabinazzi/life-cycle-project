import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemEdit!: Item;
  valorItem!: string;

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemEdit'].firstChange) {
      this.valorItem = this.itemEdit?.nome;
    }
  }

  adicionar() {
    this.service.updateList(this.valorItem);
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }
}
