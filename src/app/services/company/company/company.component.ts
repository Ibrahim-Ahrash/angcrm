// import { NbButtonModule } from '@nebular/theme';
// import { Component } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faFilter, faPlus, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons'
// import { NbDialogService, NbToastrService, NbPopoverModule } from '@nebular/theme';
import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, OnInit } from '@angular/core';
import { faFilter, faPlus, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons'
import { ColDef, GridApi } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/app/@services/services.service';
import { ListModule } from '../../list.module';
import { NbDialogService, NbToastrService, NbPopoverModule } from '@nebular/theme';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  filt = faFilter;
  plus = faPlus;
  trash = faTrash;
  searc = faSearch;


  OpenFilter() {
    console.log("clicked");
  }
  confirmDelet() {
    console.log("deleted");
  }
}
