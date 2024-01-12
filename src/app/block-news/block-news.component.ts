import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-news',
  templateUrl: './block-news.component.html',
  styleUrls: ['./block-news.component.scss'],
})
export class BlockNewsComponent  implements OnInit {
  @Input() imagen: string="";
  @Input() tituloCard: string="";
  @Input() descripcion: string="";

  isSmallScreen: boolean;
  constructor() { 
    this.isSmallScreen = window.innerWidth <= 600;
  }

  ngOnInit() {
  }
  
}
