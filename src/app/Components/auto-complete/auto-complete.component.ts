import { Component, OnInit } from '@angular/core';
import {DbServiceService} from '../../Services/db.service';
import {UserInfo} from '../../Models/userInfo'

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  private listOfUsers:UserInfo[];
  constructor(private dbService:DbServiceService) { }

  ngOnInit() {
  }

  searchPress(term) {
    if (term === ''){
      this.listOfUsers=[];
      return;
    }
    
    this.listOfUsers= this.dbService.searchUsers(term);
 } 

}
