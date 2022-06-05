import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../../../services/dummy-data.service';
import { faRemove, faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgxSmartModalService } from 'ngx-smart-modal';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css'],
})
export class AdminBlogComponent implements OnInit {
  faRemove = faRemove;
  faEdit = faEdit;
  public Editor = ClassicEditor;


  rows = [];
  columns = [
    { name: 'id' },
    { name: 'title' },
    { name: 'content' },
    { name: 'createDate' },
    { name: 'publishDate' },
  ];

  constructor(private apiService: DummyDataService,public ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {
    this.apiService.getAllPosts().then((data) => (this.rows = data));
  }

  edit(id) {
    alert('Editing:' + id);
  }
  remove(id) {
    alert('removing:' + id);
  }
  add() {
    alert('add');
  }
}
