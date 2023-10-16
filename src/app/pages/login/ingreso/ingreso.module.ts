import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IngresoPageRoutingModule } from './ingreso-routing.module';
import { IngresoPage } from './ingreso.page';
import { DuocHeaderComponentModule } from 'src/app/componentes/duoc-header/duoc-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoPageRoutingModule,
    DuocHeaderComponentModule
  ],
  declarations: [IngresoPage]
})
export class IngresoPageModule {}
