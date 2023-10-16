import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { DuocHeaderComponentModule } from 'src/app/componentes/duoc-header/duoc-header.component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    DuocHeaderComponentModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
