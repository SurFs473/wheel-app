import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router) {}

  public loginScreen(): void {
    this.router.navigate(['/home/login']);
  }

  public registerScreen(): void {
    this.router.navigate(['/home/register']);
  }

  public homeScreen(): void {
    this.router.navigate(['/home']);
  }
}
