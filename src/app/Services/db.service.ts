import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserInfo} from '../Models/userInfo'


@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private http: HttpClient) { }

  searchUsers(term:string) :Observable<UserInfo[]>{
    return this.http.get<UserInfo[]> ('https://api/Users/search?term='+term);
      }

/*       searchUsers(term:string):UserInfo[]{
        return [
          {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWF2a29YU6Lj38PMYljnQjXZIiwRJDlLQvM0uMgV-bkprTb26Q',
            workTitle: 'engineer',
            name: 'dani'
          },
          {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sJrw1N2xdTpV05KS-6U59Le7cyQbBSrS7ff_oooEsMnq4KtA-A',
            workTitle: 'manager',
            name: 'ben'
          },
        ]
      } */

}
