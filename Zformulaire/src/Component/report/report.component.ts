import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  opened = true;
  isChecked = false;
  activeLink: string | null = null;
  nom: string | null = null;

  links = [
    { label: 'Accueil', route: 'home' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  getTitle(): string {
    const currentTitle = document.title;
    const lastViewedTitle = localStorage.getItem('lastViewedTitle');
    const titleToReturn = lastViewedTitle ? lastViewedTitle : currentTitle;
    if (currentTitle) {
      localStorage.setItem('lastViewedTitle', currentTitle);
    }
    return titleToReturn;
  }

  logout() {
    // Implement your logout logic here
    this.router.navigate(['/login']);
  }

  toggleSidenav() {
    this.opened = !this.opened;
  }

  navigateToLink(route: string) {
    this.activeLink = route;
    this.router.navigate([route]);
  }
}
