import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataBaseService } from '../../../services/data-base.service';
import { AuthService } from './../../../services/auth.service';
import { Usuario } from 'src/app/model/Usuario';
import { APIClientService } from 'src/app/services/apiclient.service';
import { showAlertDUOC, showAlertError } from 'src/app/model/Message';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page{

  constructor(private authService: AuthService, private api: APIClientService) { }

  onLogoutClick(): void {
    this.authService.logout();
  }
}
