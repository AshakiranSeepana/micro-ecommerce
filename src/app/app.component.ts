import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  
})
export class App {
  constructor(public router :Router){}
  protected title = 'Ecommerce';
  showMenu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  getRouting(info : string){
    switch(info){
      case 'login' :
        console.log("login**");
        this.router.navigate(['/user-login']);
        break;
    }
  }
}
