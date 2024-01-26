import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  openWhats():void{
    window.open('https://wa.me/+5534991564730')
  }

  openTell():void{
    window.open('tel:+5534991564730')
  }

  openInsta():void{
    window.open('https://www.instagram.com/psicarolinafranco/')
  }

  openEmail():void{
    window.open('mailto:psicarolinafranco@gmail.com')
  }

  openLinkedin():void{
    window.open('https://br.linkedin.com/in/carolina-teodoro-franco-335a39187?trk=public_profile_browsemap')
  }
  
}
