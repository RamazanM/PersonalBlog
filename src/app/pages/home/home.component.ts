import { Component, OnInit } from '@angular/core';
import { faAddressCard, faBlog, faImage, faRss,faTeletype } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  icons = {
    blog: faTeletype,
    photos: faImage,
    cv: faAddressCard,
  };

  ngOnInit() {}
}
