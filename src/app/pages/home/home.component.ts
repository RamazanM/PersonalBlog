import { Component, OnInit } from '@angular/core';
import { faAddressCard, faBlog, faImage, faRss } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  icons = {
    blog: faRss,
    photos: faImage,
    cv: faAddressCard,
  };

  ngOnInit() {}
}
