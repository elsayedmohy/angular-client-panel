import { Component, OnInit } from '@angular/core';
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
faPlus = faPlusCircle
  constructor() { }

  ngOnInit(): void {
  }

}
