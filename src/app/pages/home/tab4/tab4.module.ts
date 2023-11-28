import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { LogoutButtonModule } from 'src/app/componentes/logout-button/logout-button.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab4PageRoutingModule,
    LogoutButtonModule,
    HttpClientModule,
    LogoutButtonModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}