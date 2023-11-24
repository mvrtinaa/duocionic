import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { showAlertDUOC } from 'src/app/model/Message';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AuthService } from 'src/app/services/auth.service';
import { DuocHeaderComponentModule } from 'src/app/componentes/duoc-header/duoc-header.component.module';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, DuocHeaderComponentModule]
})
export class RegistrarsePage implements OnInit {
  
  public usuario:any = new Usuario();
  repeticionPassword = '';
  listaUsuarios: Usuario[] = [];
  constructor(private authService: AuthService, private bd: DataBaseService, private router: Router) { }

  ngOnInit() {
    this.bd.listaUsuarios.subscribe(usuarios => {
      this.listaUsuarios = usuarios;
    });
  }
  
  mostrarMensaje(nombreCampo:string, valor: string) {
    if (valor.trim() === '') {
      showAlertDUOC(`Debe ingresar un valor para el campo "${nombreCampo}".`);
      return false;
    }
    return true;
  }

  validarUsuarios(){
    let usuarioEncontrado = this.listaUsuarios.find(usuario => usuario.correo === this.usuario.correo);
    if (usuarioEncontrado){
      showAlertDUOC(`El usuario "${this.usuario.correo}" ya existe.`);
      return false;
    }
    return true;
  }

  actualizarPerfil() {
    if (this.usuario.password !== this.repeticionPassword){
      showAlertDUOC(`Las contraseñas escritas deben ser iguales.`);
      return;
    }
    if (this.validarUsuarios() && this.usuario.correo !== '' && this.usuario.password !== '' && this.usuario.nombre !== '' && this.usuario.apellido !== '' && this.usuario.rut !== '' && this.usuario.telefono !== '' && this.usuario.direccion !== '' && this.usuario.comuna !== '' && this.usuario.region !== '' && this.usuario.pais !== '' && this.usuario.fechaNacimiento !== '' && this.usuario.sexo !== '' && this.usuario.tipoUsuario !== '' && this.usuario.estado !== '' && this.usuario.foto !== '') { 
      this.bd.guardarUsuario(this.usuario);
      showAlertDUOC('Sus usuario fue creado');
      this.actualizarYRedirigir()
    }
    showAlertDUOC(`Debe ingresar un valor para todos los campos.`);

  }
  actualizarYRedirigir() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['login'])
    );
    
    window.location.href = url;
  }
  volver(){
    this.router.navigate(['login']);
  }
}


