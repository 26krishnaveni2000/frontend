import { Component, Input, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  
  
  constructor() { }

  ngOnInit(): void {}
  bgVariable:boolean = false;
  headerVariable:boolean = false;
  @HostListener('document:scroll')
  onScroll(){
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      this.bgVariable = true;
      this.headerVariable = true;
    }
    else{
      this.bgVariable = false;
      this.headerVariable = false;
    }
  }
  
}
