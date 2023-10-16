import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { LogoutButtonModule } from 'src/app/componentes/logout-button/logout-button.module';
import { ForoComponent } from 'src/app/componentes/foro/foro.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    LogoutButtonModule,
    ForoComponent,
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}