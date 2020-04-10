import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name:string = "12345";

  lastname:string = "Polo";


  constructor(){
    console.log("Hello Angular!");
    this.lastname = "Garcia";
    this.changeName("Karla");
    this.myFunction();


  }

  changeName = (name:string)=>{
    this.name = name;

  }

  myFunction = ()=>{
    console.log("Nice!!!");
  }




}
