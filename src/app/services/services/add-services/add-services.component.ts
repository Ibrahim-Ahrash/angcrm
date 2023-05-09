import { NbButtonModule, NbDialogRef, NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { FormValidationService } from 'src/app/@services/form-validation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/@services/services.service';


@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent {
  af: any;

  constructor(
    private validation: FormValidationService,
    private toaster: NbToastrService,
    private service: ServicesService,
    private dailogref: NbDialogRef<any>,
  ) { }

  SelectedCustomer: any = null;
  ServicesModule = [];
  ShowResultMenu = false;
  Customers = [];

  SearchObject = {

    SearchValue: ''
  }
  ServiceForm = new FormGroup({

    ServiceID_FK: new FormControl(0, [Validators.required, this.validation.ValidateSelectInput]),
    Note: new FormControl(''),
    RequiredDate: new FormControl(new Date(), Validators.required),
    branchesIDs: new FormControl(),
    ApplicantName: new FormControl('', Validators.required),
    ApplicantPhoneNumber: new FormControl('', [Validators.required, this.validation.ValidatePhoneNumber])
  })


  MarkInvalidControls() {

    const controls = this.ServiceForm.controls;

    for (const name in controls) {
      if (controls[name].invalid) {

        controls[name].markAsTouched({ onlySelf: true });
      }
    }

  }

  onSubmit() {

    if (this.SelectedCustomer == null) {

      this.toaster.warning("تنبية", "الرجاء تحديد زبون لتكملة العملية");
      return;
    }

    // if (this.ServiceForm.invalid) {

    //   this.MarkInvalidControls()
    //   return;
    // }


    var ServiceObject = this.ServiceForm.getRawValue();
    console.log("fff");
    console.log(ServiceObject);
    ServiceObject.branchesIDs = [this.SelectedCustomer.BranchID_PK];
    console.log("clicked2")

    console.log(ServiceObject);
    this.service.AddNewService(ServiceObject)
      .subscribe({
        next: (res) => {

          if (res.StatusCode == 200) {
            console.log("clicked1")
            this.toaster.success("تمت العملية", "تمت عملية إضافة الخدمة بنجاح");
            this.dailogref.close(true);
          } else {

            this.toaster.danger("حدث خطأ", res.Message)
            console.log("clicked4")
          }

          console.log(res);

        }
      })


  }

  close() {
    this.dailogref.close(false);
  }
  SaveCustomerData(CustomerObject, branch) {


    console.log("branc")
    console.log(branch);

    branch.value = CustomerObject.Name;

    this.SelectedCustomer = CustomerObject;

    this.ServiceForm.get("ApplicantName").setValue(CustomerObject.BranchMangerName)
    this.ServiceForm.get("ApplicantPhoneNumber").setValue(CustomerObject.BranchMangerPhoneNumber)
    this.ServiceForm.get("ServiceID_FK").setValue(1022)

    console.log(CustomerObject);

    this.getServiceModule(CustomerObject.SystemModulesID_FK)
  }
  getServiceModule(SystemModulesID_FK) {

    this.service.getServicesBySystemModule(SystemModulesID_FK)
      .subscribe({
        next: (res) => {

          console.log(res);

          if (res.StatusCode == 200) {

            this.ServicesModule = res.JsonArray;

          } else {

            this.toaster.danger("حدث خطأ", res.Message);
          }
        }
      })
  }
  onKeyPress(event) {

    this.ShowResultMenu = true;

    if (event.target.value == "") return;

    this.SearchObject.SearchValue = event.target.value;

    this.service.getCustomersBySerach(this.SearchObject)
      .subscribe({
        next: (res) => {

          this.Customers = res.JsonArray;
          console.log(this.Customers);
        }
      })
  }

  HideSearchResult() {

    setTimeout(() => this.ShowResultMenu = false, 500)
  }


}
