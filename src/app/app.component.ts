import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import { UserService } from "app/user/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user1Activate = false;
  user2Activate = false;

  constructor(private userService: UserService){
    
  }

  ngOnInit(){
    this.userService.userActived.subscribe((id :number)=>{
      if(id === 1){
        this.user1Activate = true;
      }
      else if (id === 2){
        this.user2Activate = true;
      }
    });
  }
}
