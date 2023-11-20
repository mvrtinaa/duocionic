import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QrNativoComponent } from './qr-nativo.component';

@NgModule({
  declarations: [QrNativoComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [QrNativoComponent]
})
export class QRNativoModule { }