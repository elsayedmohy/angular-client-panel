import {Component, OnInit} from '@angular/core';
import {Client} from "../../models/client";
import {faArrowAltCircleLeft} from "@fortawesome/free-regular-svg-icons";

import {FirebaseService} from "../../services/firebase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SnackBarService} from "../../services/snack-bar.service";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id: string;
  client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: 0
  }
  faArrowLeft = faArrowAltCircleLeft

  constructor(private firebase: FirebaseService,
              private snackBar: SnackBarService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.firebase.getClient(this.id).subscribe(client => {
      this.client = client
    })
  }

  onSubmit({value, valid}) {


    if (!valid) {
      this.snackBar.openSnackBar("Please type valid info!","close")
    }
    if (valid) {
      value.id = this.id
      this.firebase.updateClient(value)
      this.snackBar.openSnackBar("Client info updated","close")
      this.router.navigate(['/clients/' + this.id])
    }
  }

}
