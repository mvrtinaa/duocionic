import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LogoutButtonComponent } from './logout-button.component';

@NgModule({
  declarations: [LogoutButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [LogoutButtonComponent]
})
export class LogoutButtonModule { }
