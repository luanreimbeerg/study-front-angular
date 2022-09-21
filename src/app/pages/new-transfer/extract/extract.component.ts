import { Component, Input, OnInit } from '@angular/core';

interface transfer {
  valor: string;
  destino: string;
  data: string;
}

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  @Input() receipt!: any[];

  constructor() {}

  ngOnInit(): void {}
}
