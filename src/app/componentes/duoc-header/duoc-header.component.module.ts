import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DuocHeaderComponent } from './duoc-header.component';

@NgModule({
  declarations: [DuocHeaderComponent],
  imports: [CommonModule, IonicModule],
  exports: [DuocHeaderComponent]
})
export class DuocHeaderComponentModule {}
