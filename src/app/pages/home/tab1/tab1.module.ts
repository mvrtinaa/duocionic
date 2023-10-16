import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { LogoutButtonModule } from 'src/app/componentes/logout-button/logout-button.module';

// Importa QRModule
import { QRModule } from 'src/app/componentes/qr/qr.module'; // Ajusta la ruta hacia el archivo qr.module

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    LogoutButtonModule,
    QRModule // Añade QRModule a la lista de imports
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
