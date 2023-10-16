import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { DataBaseService } from 'src/app/services/data-base.service';
@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
})
export class CorrectoPage implements OnInit {
  public userEmail: any = '';
  public userPassword: any = '';

  constructor(private router: Router, private route: ActivatedRoute, private dataBaseService: DataBaseService) {
  }

  async ngOnInit() {
    this.userEmail = this.route.snapshot.paramMap.get('email');
    const usuarioModel = new Usuario();
    const usuario = await this.dataBaseService.leerUsuario(this.userEmail);
    
    if (usuario) {
      this.userPassword = usuario.password;
    } else {
      alert('Usuario no encontrado.');
    }
  }


  navigateToIngreso() {
    this.router.navigate(['/']);
  }
}

