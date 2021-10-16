import { Component } from '@angular/core';
import { Router } from '@angular/router';


import {  UserService} from '././services/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MomknTaskFront';
  constructor(private user:UserService,private router:Router)
  {}
  logout(){
    this.user.userLogout().subscribe();
    this.router.navigate(['/login']);
        localStorage.clear();
       

}
}
