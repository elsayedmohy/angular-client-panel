import { Component, OnInit } from '@angular/core';
import {ViewChild} from "@angular/core";
import {faArrowAltCircleLeft} from "@fortawesome/free-regular-svg-icons";
import {Client} from "../../models/client";
import {FirebaseService} from "../../services/firebase.service";
import {Router} from "@angular/router";
import {SnackBarService} from "../../services/snack-bar.service";


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  faArrowLeft = faArrowAltCircleLeft
  client:Client = {
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    balance:0
}

  disableBalanceOnAdd:boolean = true
@ViewChild("clientForm") form:any
  constructor(private firebaseService:FirebaseService,private router:Router,
              private snackBar:SnackBarService) { }

  ngOnInit(): void {
  }

  onSubmit({value , valid}) {

    if(this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    if(!valid){
      this.snackBar.openSnackBar("Please type valid info!","close")
    }
    if(valid) {
    this.firebaseService.addClient(value)
      this.snackBar.openSnackBar("Client added","close")
    this.router.navigate(['/'])
  }
    }
}
