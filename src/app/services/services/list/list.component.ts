import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, OnInit } from '@angular/core';
import { faFilter, faPlus, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons'
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/app/@services/services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  rowData = [];

  constructor(
    private http: HttpClient,
    private getser: ServicesService
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



  ngOnInit(): void {

    if (!!localStorage.getItem("getServicesList")) {

      this.FilterObject = JSON.parse(localStorage.getItem("getServicesList")!);
    }

    this.getServiceList();
  }

}

