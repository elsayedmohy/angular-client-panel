import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {Client} from "../../models/client";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:Client[];
  sub:Subscription;
  totalOwed:number;
  faUsers = faUsers
  faInfo = faInfoCircle
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit()  {
    this.sub = this.firebaseService.getClients().subscribe(clients => {
      this.clients = clients;
      this.getTotalOwed();
    })
  }
  getTotalOwed() {
    this.totalOwed = this.clients.reduce((total , client) => {
        return total + +client.balance
    },0)
  }
}
