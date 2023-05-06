import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/@services/auth/auth.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  constructor(
    private http: HttpClient,
    private login: AuthService
  ) { }


  usericon = faUser;
  passicon = faLock;


  ViewPassword = false;

  LogInObject = {

    Username: "",
    Password: ""
  }

  ErrorMessage = "";
  Error = false;
  onSubmit() {

    console.log(this.LogInObject);

    if (this.LogInObject.Username == "" || this.LogInObject.Password == "") {

      this.ErrorMessage = "الرجاء تعبئة جميع الحقول";
      this.Error = true;
      return;
    }

    this.login.LogInToSystem(this.LogInObject)
      .subscribe({
        next: (res) => {

          if (res.StatusCode == 200) {

            localStorage.setItem("UserData", JSON.stringify(res.JsonObject));
            localStorage.setItem("Token", res.JsonObject.AccessToken + ':' + res.JsonObject.UserName)
            // this.router.navigateByUrl("/home");
            console.log("success")

          } else {

            this.ErrorMessage = res.Message;
            this.Error = true;
            console.log("ee")

          }

        }
      })
  }
}
