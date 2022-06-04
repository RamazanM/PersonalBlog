import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { DummyDataService } from '../../../services/dummy-data.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css'],
})
export class AdminBlogComponent implements OnInit {
  rows = [];
  columns = [
    { name: 'id' },
    { name: 'title' },
    { name: 'content' },
    { name: 'createDate' },
    { name: 'publishDate' },
  ];

  constructor(private apiService: DummyDataService) {}

  ngOnInit() {
    this.apiService.getAllPosts().then((data) => (this.rows = data));
  }

  edit(id) {
    alert('Editing:' + id);
  }
  remove(id) {
    alert('removing:' + id);
  }
}
