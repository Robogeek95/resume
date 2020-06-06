import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  avatar: string = 'assets/2174462f28beb19e801818e1e8e478eab672e46a.png';
  constructor() { }

  ngOnInit(): void {
  }

}
