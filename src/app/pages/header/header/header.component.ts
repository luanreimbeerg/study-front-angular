import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public darkMode(event: any): void {
    event.checked
      ? document.body.classList.add('dark-theme')
      : document.body.classList.remove('dark-theme');
  }
}
