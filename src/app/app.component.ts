import { Component } from '@angular/core';

interface transfer {
  valor: string;
  destino: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'transfer';

  public transferetion: transfer[] = [];

  public transfer($event: transfer): void {
    console.log($event);

    const transfers = { ...$event, data: new Date() };

    this.transferetion.push(transfers);
  }
}
