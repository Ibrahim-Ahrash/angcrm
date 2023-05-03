import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import {faFilter,faPlus, faTrash, faUsers} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  filt=faFilter;
  plus=faPlus;
  trash=faTrash;
  user=faUsers;
}
