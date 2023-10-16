import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-miclase',
  templateUrl: './miclase.component.html',
  styleUrls: ['./miclase.component.scss']
})
export class MiClaseComponent implements OnInit {
  datosQRRecibidos: any = {};


  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit(): void {
    this.dataService.datosQRActuales.subscribe((datosQR) => {
      this.datosQRRecibidos = datosQR;
    });
  }

  onLogoutClick(): void {
    this.authService.logout();
  }
}
