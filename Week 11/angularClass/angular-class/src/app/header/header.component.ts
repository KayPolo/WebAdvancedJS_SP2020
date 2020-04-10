import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  menu = ["Project One", "Project Two", "Project Three"];

  constructor() { }

  showAbout = ()=>{
    //take my modal and show it
    let openModal = document.getElementById('about-modal')
    openModal.classList.remove('hide')
    openModal.classList.add('show')

 
  }

  closeAbout = ()=>{
    //close my modal

  }


  ngOnInit(): void {
  }

}
