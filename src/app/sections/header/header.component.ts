import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faExpand} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() {}
  usericon = faHouse;
  passicon = faExpand;

  items :NbMenuItem[] = [
  {
    title : "تسجيل الخروج",
    link : '/'

  }
  ]
  ngOnInit(): void {
  }
}
