import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { DummyDataService } from '../../services/dummy-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor(private dataService: DummyDataService) {}
  data: Array<Post>;
  ngOnInit() {
    this.dataService.getAllPosts().then((d) => (this.data = d));
  }
}
