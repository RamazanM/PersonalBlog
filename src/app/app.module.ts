import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogComponent } from './pages/blog/blog.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { CvComponent } from './pages/cv/cv.component';

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
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FontAwesomeModule,
  ],
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
