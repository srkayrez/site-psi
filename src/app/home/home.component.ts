import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  openWhats():void{
    window.open('https://wa.me/+5534991564730')
  }
  
}
