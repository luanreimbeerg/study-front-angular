import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  public displayedColumns: string[] = ['created', 'value', 'fate'];
  public data = new MatTableDataSource();
  public resultsLength = 0;

  @Input() receipt!: any[];

  constructor() {}

  ngOnInit(): void {}

  public searchTransfer() {
    this.data.data = this.receipt;
    this.resultsLength = this.receipt.length;
  }
}
