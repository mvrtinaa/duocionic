import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { DataBaseService } from 'src/app/services/data-base.service';
@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  userEmail: any= '';
  fraseDelUsuario: string = '';
  userResponse: string = '';
  loginError: string | null = null;
  
  constructor(private route: ActivatedRoute, private router: Router, private dataBaseService: DataBaseService) { }

  async handleLogin() {
    this.userEmail = this.route.snapshot.paramMap.get('email');
    const usuario = await this.dataBaseService.leerUsuario(this.userEmail);
    
    if (usuario && usuario.respuestaSecreta.toLowerCase() === this.userResponse.toLowerCase()) {
      // Si la respuesta es correcta, redirige a la página 'correcta' con el correo como parámetro
      this.router.navigate(['/correcto', this.userEmail]);
    } else {
        // Si la respuesta es incorrecta, redirige a la página 'incorrecta'
        this.router.navigate(['/incorrecto']);
    }
  }

  navigateToIngreso() {
    this.router.navigate(['/']);
  }
  
  async ngOnInit() {

  }
}
