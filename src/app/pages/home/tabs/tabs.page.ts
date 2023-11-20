import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  public usuario:any = new Usuario();
  listaUsuarios: Usuario[] = [];
  esAdmin: boolean = false;
  constructor (private authService: AuthService, private bd: DataBaseService, private router: Router) {
    
  }
  checkIfUserIsAdmin(x:any) {
    if (x == "admin@duocuc.cl"){
      this.esAdmin = true;
      return
    } 
  }
  async ngOnInit() {
    this.bd.listaUsuarios.subscribe(usuarios => {
      this.listaUsuarios = usuarios;
    });
    this.authService.leerUsuarioAutenticado().then((usuario) => {
      this.usuario = usuario;

      console.log("usuario ", this.usuario);
      this.checkIfUserIsAdmin(this.usuario.correo);
    })
    
  }
}
