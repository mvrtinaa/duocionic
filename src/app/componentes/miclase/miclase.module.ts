import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MiClaseComponent } from './miclase.component';

@NgModule({
  declarations: [MiClaseComponent],
  imports: [
    CommonModule,
    IonicModule  // Aquí importas el módulo de Ionic
  ],
  exports: [MiClaseComponent]
})
export class MiClaseModule { }
