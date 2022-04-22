import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title:string;
  public subtitle:string;
  public email:string;

  constructor() {
    this.title = "Renzo Guerrero";
    this.subtitle = "Desarrollador web y de visión por computador";
    this.email = "rguerreroh@uni.pe";
  }

  ngOnInit() {
  }

}
