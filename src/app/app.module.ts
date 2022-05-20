import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { CvComponent } from './pages/cv/cv.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { AdminSidebarComponent } from './admin/components/admin-sidebar/admin-sidebar.component';
import { AdminPhotosComponent } from './admin/pages/admin-photos/admin-photos.component';
import { AdminBlogComponent } from './admin/pages/admin-blog/admin-blog.component';
import { AdminCvComponent } from './admin/pages/admin-cv/admin-cv.component';
import { AdminSettingsComponent } from './admin/pages/admin-settings/admin-settings.component';
import { CommonModule } from '@angular/common';

var routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: '',
        component: AdminSidebarComponent,
        outlet: 'sidebar',
      },
      {
        path: 'photos',
        component: AdminPhotosComponent,
      },
      {
        path: 'blog',
        component: AdminBlogComponent,
      },
      {
        path: 'cv',
        component: AdminCvComponent,
      },
      {
        path: 'settings',
        component: AdminSettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminBlogComponent,
    AdminCvComponent,
    AdminPhotosComponent,
    AdminSettingsComponent,
    AdminSidebarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
