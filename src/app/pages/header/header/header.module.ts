import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header.component';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatSlideToggleModule, MatToolbarModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
