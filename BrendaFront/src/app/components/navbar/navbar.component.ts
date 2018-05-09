import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/themeService/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo = 'Brenda';
  isNightModeOn = false;
  constructor(private themeService: ThemeService) {
   }

  ngOnInit() {
  }
  changed() {
    this.themeService.isNightModeOn = this.isNightModeOn;
  }

}
