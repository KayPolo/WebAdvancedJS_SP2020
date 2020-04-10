import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private element:ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.addEventListener('click', ()=>{
      this.close()
    })
  }

    close(){
      this.element.nativeElement.classList.remove("show")
      this.element.nativeElement.classList.add("hide")
    }


}
