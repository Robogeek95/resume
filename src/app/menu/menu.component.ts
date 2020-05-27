import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  faUser,
  faPuzzlePiece,
  faBox,
  faAddressBook,
  faWeight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  public selectedIndex: number;
  public links = [
    {
      name: 'about',
      icon: faUser,
    },
    {
      name: 'skills',
      icon: faPuzzlePiece,
    },
    {
      name: 'portfolio',
      icon: faBox,
    },
    {
      name: 'services',
      icon: faWeight,
    },
    {
      name: 'contact',
      icon: faAddressBook,
    },
  ];

  public social = [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
    },
    {
      name: 'Github',
      icon: faGithub,
    },
    {
      name: 'twitter',
      icon: faTwitter,
    },
  ];
  public profilePic = 'assets/2174462f28beb19e801818e1e8e478eab672e46a.png';
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.links.findIndex(
        (link) => link.name.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
