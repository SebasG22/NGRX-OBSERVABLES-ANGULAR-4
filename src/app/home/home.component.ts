import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  numbersObsSuscription : Subscription;
  customObsSuscription: Subscription;

  ngOnInit(){
    const myNumbers = Observable.interval(1000)
    .map((number :number)=>{
       return number * 2;
    });
    this.numbersObsSuscription = myNumbers.subscribe((number: number)=>{
      console.log(number);
    });

    const myObservable =Observable.create((observer : Observer<string>)=>{
      setTimeout(()=>{
        observer.next('first package');
      },2000);
      setTimeout(()=>{
        observer.next('second package');
      },4000);
      setTimeout(()=>{
        //observer.error('This does not work');
        observer.complete();
      },5000);
    })
    this.customObsSuscription = myObservable.subscribe(
      (data: string)=>{
        console.log(data);
      },
      (error: string)=>{
        console.error(error);
      },
      ()=>{
        console.log("Complete");
      }
    )
  }

  ngOnDestroy(){
    this.numbersObsSuscription.unsubscribe();
    this.customObsSuscription.unsubscribe();
  }

}
