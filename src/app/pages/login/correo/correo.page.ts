import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/data-base.service';
@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  userEmail: string = "";
  usuarioModel: Usuario = new Usuario();
  loginError: string | null = null;
  constructor(private authService: AuthService, private router: Router, private dataBaseService: DataBaseService) { }


  

  async handleLogin() {
    const email = this.userEmail;
    const usuario = await this.dataBaseService.leerUsuario(email);
  
    if (usuario) {
      this.router.navigate(['/login/pregunta/pregunta', usuario.correo]);
    } else {
      this.loginError = 'Credenciales incorrectas. Por favor, verifica tu correo';
      this.router.navigate(['/incorrecto']);
    }
  }  


  navigateToIngreso() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
