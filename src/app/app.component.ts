import { NavBarService } from './services/nav-bar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-delivery-system-frotend';
  navbarStatus = true;

  constructor(private navbarService: NavBarService) {
    this.navbarStatus = navbarService.getNavbarStatus();
    this.navbarService.navbarStatusChanged.subscribe((newStatus) => {
      this.navbarStatus = newStatus;
    });

  }
  
}
