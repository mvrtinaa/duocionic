import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

const fadeInAnimation = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('5s ease-out')
  ])
]);


@Component({
  selector: 'app-duoc-header',
  templateUrl: './duoc-header.component.html',
  styleUrls: ['./duoc-header.component.scss'],
  animations: [fadeInAnimation]
})
export class DuocHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
