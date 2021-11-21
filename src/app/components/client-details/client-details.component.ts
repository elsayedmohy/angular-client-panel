import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Client} from "../../models/client";
import {faArrowAltCircleLeft} from "@fortawesome/free-regular-svg-icons";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons/faPencilAlt";
import {SnackBarService} from "../../services/snack-bar.service";



@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id:string;
  client:Client;
  hasBalance:boolean = false;
  showBalanceUpdateInput:boolean = false
  faArrowLeft = faArrowAltCircleLeft
  faPencil = faPencilAlt




  constructor(private firebase:FirebaseService,
              private router:Router,
              private route:ActivatedRoute,
              private snackBar:SnackBarService) { }

  ngOnInit(): void {

      this.id = this.route.snapshot.params['id']
      this.firebase.getClient(this.id).subscribe(client=> {
        this.client = client
        if (this.client != null) {
          if (this.client.balance > 0) {
            this.hasBalance = true
          }
        }
      })
  }

  updateClient(){
      this.router.navigate(['clients/client/edit/'+this.id])
  }

  updateBalance(){
    this.firebase.updateClient(this.client)
    this.snackBar.openSnackBar("Client Updated","close")
  }

  deleteClient(){
    this.firebase.removeClient()
    this.router.navigate(['/'])
    this.snackBar.openSnackBar("Client Removed","close")
  }

}
