import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  datosQRRecibidos: any = {};

  constructor(private dataService: DataService, private authService: AuthService) {
    this.dataService.datosQRActuales.subscribe((datosQR) => {
      this.datosQRRecibidos = datosQR;
    });
  }

  onLogoutClick(): void {
    this.authService.logout();
  }

}