import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CorrectoPageRoutingModule } from './correcto-routing.module';
import { CorrectoPage } from './correcto.page';
import { InicioSesionComponentModule } from 'src/app/componentes/inicio-sesion/inicio-sesion.component.module';
import { DuocHeaderComponentModule } from 'src/app/componentes/duoc-header/duoc-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrectoPageRoutingModule,
    InicioSesionComponentModule,
    DuocHeaderComponentModule
  ],
  declarations: [CorrectoPage]
})
export class CorrectoPageModule {}