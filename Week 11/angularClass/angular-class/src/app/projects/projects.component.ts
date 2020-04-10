import { Component, OnInit } from '@angular/core';
import {data} from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

 
data = data;
  
  // myFunction = ()=>{
  //   console.log("CLICK!!!!!!");
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
