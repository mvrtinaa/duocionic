import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoPage } from './ingreso.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage-angular';
import { RouterTestingModule } from '@angular/router/testing';
import { APIClientService } from 'src/app/services/apiclient.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SQLiteService } from 'src/app/services/sqlite.service';
import { DuocHeaderComponentModule } from 'src/app/componentes/duoc-header/duoc-header.component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Usuario } from 'src/app/model/Usuario';
function suma(x: number, y: number) {
  return x + y;
}

describe('Probar página de ingreso', () => {
  let component: IngresoPage;
  let fixture: ComponentFixture<IngresoPage>;

  beforeEach(async () => { 
    await TestBed.configureTestingModule({ 
      declarations: [IngresoPage], // IngresoPage se declara aquí
      imports: [IonicModule, FormsModule, CommonModule, HttpClientTestingModule, RouterTestingModule, DuocHeaderComponentModule, BrowserAnimationsModule],
      providers: [DataBaseService, AuthService, Storage, APIClientService, SQLiteService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoPage); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería poder crear la página de ingreso', () => {
    expect(component).toBeTruthy(); 
  });

  it('La función suma(10, 5) debería devolver 15', () => {
    expect(suma(10, 5)).toEqual(15);
  });

  it('Debería asignar correo y contraseña a nombre de Ana Torres', () => {
    component.userEmail = 'atorres@duocuc.cl';
    component.userPassword = '1234';
    expect(component.userEmail).toBe('atorres@duocuc.cl');
    expect(component.userPassword).toBe('1234');
  });

  it('Debería poder iniciar sesión con Ana Torres', async () => {
    // Inyecta el servicio AuthService
    const authService = TestBed.inject(AuthService); 
    // Espía el método login del servicio AuthService para verificar que se llame con los parámetros 'atorres@duocuc' y '1234'
    spyOn(authService, 'login');
    // Ejecuta el método ingresar del componente
    component.userEmail = 'atorres@duocuc.cl';
    component.userPassword = '1234';
    await component.handleLogin(); 
    // Verifica que el método login del servicio AuthService haya sido llamado con los parámetros 'atorres@duocuc' y '1234'
    expect(authService.login).toHaveBeenCalledWith('atorres@duocuc.cl', '1234');
  });
  it('Debería retornar un mensaje de error si el correo está vacío', () => {
    const usuario = new Usuario();
    expect(usuario.validarCorreo('')).toBe('Para ingresar al sistema debe ingresar el correo del usuario.');
  });
  it('Debería retornar un mensaje de error si la contraseña está vacía', () => {
    const usuario = new Usuario();
    expect(usuario.validarPassword('')).toBe('Para entrar al sistema debe ingresar la contraseña.');
  });
  it('Debería retornar un mensaje de error si el nombre está vacío', () => {
    const usuario = new Usuario();
    expect(usuario.validarNombre('')).toBe('Debe ingresar su nombre.');
  });
  it('Debería retornar un mensaje de error si el nombre está vacío', () => {
    const usuario = new Usuario();
    expect(usuario.validarNombre('')).toBe('Debe ingresar su nombre.');
  });
  it('Debería retornar un mensaje de error si el apellido está vacío', () => {
    const usuario = new Usuario();
    expect(usuario.validarApellido('')).toBe('Debe ingresar su nombre.');
  });
  it('Debería retornar un mensaje de error si la pregunta secreta está vacía', () => {
    const usuario = new Usuario();
    expect(usuario.validarPreguntaSecreta('')).toBe('Debe ingresar su pregunta secreta.');
  });
  it('Debería retornar un mensaje de error si la respuesta secreta está vacía', () => {
    const usuario = new Usuario();
    expect(usuario.validarRespuestaSecreta('')).toBe('Debe ingresar su respuesta secreta.');
  });
  
});