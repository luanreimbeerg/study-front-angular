import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { ExtractComponent } from './extract.component';

@NgModule({
  declarations: [ExtractComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  exports: [ExtractComponent],
})
export class ExtractModule {}
