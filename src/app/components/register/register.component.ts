import { Component, OnInit } from '@angular/core';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {SnackBarService} from "../../services/snack-bar.service";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

    this.AuthService.register(this.email , this.password).then((res)=> {
      this.router.navigate(['/'])
      this.snackBar.openSnackBar("signed up successfully","close")
    }).catch((err)=> this.snackBar.openSnackBar(err,"close"))

  }

}
