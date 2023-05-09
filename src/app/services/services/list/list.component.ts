import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, OnInit } from '@angular/core';
import { faFilter, faPlus, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons'
import { ColDef, GridApi } from 'ag-grid-community';
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
  private gridApi: GridApi;
  private gridColumnApi: any;
  rowData = [];

  constructor(
    private http: HttpClient,
    private getser: ServicesService,
    private diag: NbDialogService,
    private toaster: NbToastrService,
  ) { }
  getSelectedRowData() {
    const selectedData = this.gridApi.getSelectedRows();
    alert(`Selected Data:\n${JSON.stringify(selectedData)}`);
    return selectedData;
  }

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
          console.log("fgdgdffg")
          console.log(res);
          console.log(localStorage.getItem("getServicesList"))
        }
      })

  }

  confirmDelet() {
    console.log("selectedData")
    const selectedData = this.gridApi.getSelectedRows();
    console.log("selectedData")
    if (selectedData.length == 0) {

      this.toaster.warning("تنبية", "please Select Service to Delete");
      return;
    }

    if (selectedData[0].ServiseStatusID_FK != 10) {

      // this.ShowMessage();
      return;
    }
    this.DeleteService(selectedData[0].ServiceRequestID_PK)
  }

  DeleteService(ServiceRequestID_PK) {


    this.getser.DeleteService(ServiceRequestID_PK)
      .subscribe({
        next: (res) => {

          if (res.StatusCode == 200) {

            this.toaster.success("تمت العملية", "تمت عملية الحدف");
            // this.getServiceList();
            this.rowData = this.rowData.filter(v => v.ServiceRequestID_PK != ServiceRequestID_PK)

          } else {

            this.toaster.danger("حذث خطأ", res.Message);

          }
        }
      })

  }
  onGridReady(params) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
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
    this.getServiceList();
    console.log("ff")
    alert(this.getSelectedRowData())
    if (!!localStorage.getItem("getServicesList")) {

      this.FilterObject = JSON.parse(localStorage.getItem("getServicesList")!);
    }


  }

}

