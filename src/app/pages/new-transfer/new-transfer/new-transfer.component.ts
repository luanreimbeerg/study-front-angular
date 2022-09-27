import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormErrorMixin } from './../../../shared/mixins/form-error.mixin';
import { MixinHandler } from '../../../shared/mixins/mixin-handler';

interface transfer {
  value: string;
  fate: string;
}
@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  @Output() toTransfer = new EventEmitter<any>();

  public form!: FormGroup;
  public transfer!: transfer;

  public hasError!: (
    controlName: string,
    errorName: string,
    loginForm: FormGroup
  ) => false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    MixinHandler.applyMixins(NewTransferComponent, [FormErrorMixin]);
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      value: ['', Validators.required],
      fate: ['', Validators.required],
    });
  }

  public onSubmit(form: any): void {
    this.transfer = {
      value: this.form.get('value')?.value,
      fate: this.form.get('fate')?.value,
    };

    console.log(this.transfer);
    // console.log(this.valor, this.destino);

    this.toTransfer.emit(this.transfer);
  }
}
