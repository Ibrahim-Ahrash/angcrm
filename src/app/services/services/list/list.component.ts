import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, OnInit } from '@angular/core';
import { faFilter, faPlus, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons'
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/app/@services/services.service';
import { ListModule } from '../../list.module';
import { NbDialogService, NbToastrService, NbPopoverModule } from '@nebular/theme';
import { FilterListComponent } from '../filter-list/filter-list.component';
import { AddServicesComponent } from '../add-services/add-services.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  rowData = [];

  constructor(
    private http: HttpClient,
    private getser: ServicesService,
    private diag: NbDialogService,
    private toaster: NbToastrService,
  ) { }

  filt = faFilter;
  plus = faPlus;
  trash = faTrash;
  user = faUsers;

  defaultColDef = {

    resizable: true,
    flex: 1,
    sortable: true
  };

  FilterObject = {
    IsRange: false,
    Duration: 1,
    DateType: 1,
    FromDate: '',
    ToDate: '',
    RefBranchID: null,
    ServiceStatusID: null,
    UserID: '',
    UserType: 1,
  }


  getServiceList() {

    localStorage.setItem("getServicesList", JSON.stringify(this.FilterObject))

    this.getser.getServicesList(this.FilterObject)
      .subscribe({
        next: (res) => {

          this.rowData = res.JsonArray;
          console.log(res);
          console.log(localStorage.getItem("getServicesList"))
        }
      })

  }



  colDefs: ColDef[] = [

    { field: 'تفاصيل الخدمة' },
    { field: 'حالة الخدمة' },
    { field: 'نوع الخدمة' },
    { field: 'تاريخ الإنشاء ' },
    { field: 'فرع الزبون ' },
    { field: 'الفرع ' },
    { field: 'رقم الطلب ' }

  ]


  OpenFilter() {
    this.diag.open(FilterListComponent,
      {
        hasBackdrop: true,
        closeOnEsc: true,
        closeOnBackdropClick: true,
        context: {
          FilterObject: this.FilterObject
        }
      }).onClose.subscribe({
        next: (filterResult) => {
          this.FilterObject = filterResult;
          this.getServiceList();
        }
      });
  }

  addService() {
    this.diag.open(AddServicesComponent,
      {
        hasBackdrop: true,
        closeOnEsc: true,
        closeOnBackdropClick: true
      })
  }


  ngOnInit(): void {

    if (!!localStorage.getItem("getServicesList")) {

      this.FilterObject = JSON.parse(localStorage.getItem("getServicesList")!);
    }

    this.getServiceList();
  }

}

