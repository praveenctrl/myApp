import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
  }

  openNav() {
    document.getElementById("mySidenav")!.style.width = "250px";
  }
}
