import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InicioSesionComponent } from './inicio-sesion.component';

@NgModule({
  declarations: [InicioSesionComponent],
  imports: [CommonModule, IonicModule],
  exports: [InicioSesionComponent]
})
export class InicioSesionComponentModule {}
