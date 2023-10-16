import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';


@Component({
  selector: 'app-incorrecto',
  templateUrl: './incorrecto.page.html',
  styleUrls: ['./incorrecto.page.scss'],
})
export class IncorrectoPage implements OnInit {

  userEmail: string= '';
  fraseDelUsuario: string = '';
  userResponse: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }



  navigateToIngreso() {
    this.router.navigate(['/']);
  }
}
