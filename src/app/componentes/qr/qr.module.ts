import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRComponent } from './qr.component';

// Importar IonicModule
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [QRComponent],
  imports: [
    CommonModule,
    IonicModule  // Añade IonicModule a la lista de imports
  ],
  exports: [QRComponent]
})
export class QRModule {}
