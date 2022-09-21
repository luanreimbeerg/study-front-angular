import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTransferComponent } from './new-transfer.component';

@NgModule({
  declarations: [NewTransferComponent],
  imports: [CommonModule, FormsModule],
  exports: [NewTransferComponent],
})
export class NewTransferModule {}
