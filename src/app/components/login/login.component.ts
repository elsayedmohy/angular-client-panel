import { Component, OnInit } from '@angular/core';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {SnackBarService} from "../../services/snack-bar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  faUser = faUser

  constructor(private AuthService:AuthenticationService,
              private router: Router,
              private snackBar:SnackBarService) { }

  ngOnInit(): void {
    this.AuthService.getAuthStatus().subscribe(auth=>{
      if(auth){
          this.router.navigate(['/'])
      }
    })
  }

  onSubmit(){

    this.AuthService.login(this.email , this.password).then((res)=> {
      this.router.navigate(['/'])
      this.snackBar.openSnackBar("Logged in successfully","close")
    }).catch((err)=> this.snackBar.openSnackBar(err,"close"))

  }
}
