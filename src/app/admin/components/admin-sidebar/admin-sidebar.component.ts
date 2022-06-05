import { Component, OnInit } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css'],
})
export class AdminSidebarComponent implements OnInit {
  public hidden = true;
  leftIcon = faChevronLeft;
  rightIcon = faChevronRight;
  constructor() {}

  ngOnInit() {}
  toggle() {
    this.hidden = !this.hidden;
  }
}
