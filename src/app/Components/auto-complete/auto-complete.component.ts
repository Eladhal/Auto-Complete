import { Component, OnInit } from '@angular/core';
import {DbServiceService} from '../../Services/db.service';
import {UserInfo} from '../../Models/userInfo'

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  search:string;
  listOfUsers:UserInfo[];
  constructor(private dbService:DbServiceService) { }

  ngOnInit() {
  }

  searchPress(term) {
    if (term === ''){
      this.listOfUsers=[];
      return;
    }
    this.search = term; // For Pipe highlight use

    this.dbService.searchUsers(term).subscribe((users)=>{
      this.listOfUsers= users;
    })
 } 
}
