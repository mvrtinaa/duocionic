import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/data-base.service';
import { showAlertDUOC } from 'src/app/model/Message';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  public usuario:any = new Usuario();
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
  eliminarUsuario(user:any){
    if(user=="admin@duocuc.cl"){
      showAlertDUOC("No se puede eliminar al administrador");
      return;
    } else{
      this.bd.eliminarUsuarioUsandoCorreo(user);
      showAlertDUOC("El usuario ha sido eliminado");
      this.router.navigate(['/tabs/tab5']);
    }
    
  }
}
