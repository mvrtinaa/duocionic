import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  userEmail: any;
  userPassword: any;
  loginError: string | null = null;

  constructor(private toastController: ToastController,private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
  async handleLogin() {
    const email = this.userEmail;
    const password = this.userPassword;

    this.authService.login(email, password);
  }

  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      icon: 'alert',
      color: 'danger'
    });
    await toast.present();
  }
}

