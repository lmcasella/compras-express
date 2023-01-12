import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared.service';
import { HomeService } from '../../../../home/services/home.service';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css'],
})
export class NavbarProfileComponent {
  constructor(
    private homeService: HomeService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  async onLogout() {
    this.homeService.cancelCart();
    this.sharedService.logout();
    this.router.navigate(['/login']);
  }
}
