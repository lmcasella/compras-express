import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css'],
})
export class NavbarProfileComponent {
  constructor(private sharedService: SharedService, private router: Router) {}

  onLogout() {
    this.sharedService.logout();
    this.router.navigate(['/login']);
  }
}
