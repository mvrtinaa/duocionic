import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { DataBaseService } from 'src/app/services/data-base.service';
import { showAlertDUOC } from 'src/app/model/Message';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit{
  public usuario:any = new Usuario();
  repeticionPassword = '';
  listaUsuarios: Usuario[] = [];
  
  constructor(private authService: AuthService, private bd: DataBaseService, private router: Router) { }

  async ngOnInit() {
    this.bd.listaUsuarios.subscribe(usuarios => {
      this.listaUsuarios = usuarios;
    });
    this.authService.leerUsuarioAutenticado().then((usuario) => {
      this.usuario = usuario;

      console.log("usuario ", this.usuario);
    })
    
  }

  mostrarMensaje(nombreCampo:string, valor: string) {
    if (valor.trim() === '') {
      showAlertDUOC(`Debe ingresar un valor para el campo "${nombreCampo}".`);
      return false;
    }
    return true;
  }

  actualizarPerfil() {
    if (this.usuario.password !== this.repeticionPassword){
      showAlertDUOC(`Las contraseñas escritas deben ser iguales.`);
      return;
    }
    this.bd.guardarUsuario(this.usuario);
    this.authService.setUsuarioAutenticado(this.usuario);
    showAlertDUOC('Sus datos fueron actualizados');
    this.actualizarYRedirigir()

  }
  actualizarYRedirigir() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['home/tabs/tab1'])
    );
    
    window.location.href = url;
  }
  onLogoutClick(): void {
    this.authService.logout();}
}
