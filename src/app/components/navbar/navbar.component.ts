import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {SnackBarService} from "../../services/snack-bar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean;
  loggedInUser:string


  constructor(private AuthService:AuthenticationService,
              private router: Router,
              private snackBar:SnackBarService) { }

  ngOnInit(): void {

    this.AuthService.getAuthStatus().subscribe(auth=>{
      if(auth){
        this.isLoggedIn =true;
        this.loggedInUser = auth.email
      }else {
        this.isLoggedIn =false;
      }
    })
  }

  onLogOutClick(){
    this.AuthService.logout();
    this.snackBar.openSnackBar("you are logged out","close");
    this.router.navigate(['/login'])
  }


}
