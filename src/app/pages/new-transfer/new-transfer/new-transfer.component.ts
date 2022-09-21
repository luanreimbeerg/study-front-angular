import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  @Output() toTransfer = new EventEmitter<any>();

  public valor!: string;
  public destino!: string;

  constructor() {}

  ngOnInit(): void {}

  public transfer(): void {
    console.log(this.valor, this.destino);

    this.toTransfer.emit({ valor: this.valor, destino: this.destino });
  }
}
