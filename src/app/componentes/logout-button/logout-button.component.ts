import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent {

  @Output() logoutClicked = new EventEmitter<void>();

  constructor() { }

  onLogoutClick(): void {
    this.logoutClicked.emit();
  }
}