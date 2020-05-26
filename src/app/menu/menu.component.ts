import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faUser, faPuzzlePiece, faBox, faAddressBook, faWeight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  public links = [
    {
      name: 'About',
      icon: faUser
    },
    {
      name: 'Skills',
      icon: faPuzzlePiece
    },
    {
      name: 'Portfolio',
      icon: faBox
    },
    {
      name: 'Contact',
      icon: faAddressBook
    },
    {
      name: 'Services',
      icon: faWeight
    },
  ];

  public social = [
    {
      name: 'LinkedIn',
      icon: faLinkedin
    },
    {
      name: 'Github',
      icon: faGithub
    },
    {
      name: 'twitter',
      icon: faTwitter
    }
  ]
  public profilePic = 'assets/2174462f28beb19e801818e1e8e478eab672e46a.png'
  constructor(private breakpointObserver: BreakpointObserver) {}
}
