import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractComponent } from './extract.component';

@NgModule({
  declarations: [ExtractComponent],
  imports: [CommonModule],
  exports: [ExtractComponent],
})
export class ExtractModule {}
