import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { SinglePostComponent } from './Components/single-post/single-post.component';
import { PostDetailsComponent } from './Components/post-details/post-details.component';
import { ActivePostsComponent } from './Components/active-posts/active-posts.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { InactivePostsComponent } from './Components/inactive-posts/inactive-posts.component';
import { ColoraDirective } from './directives/colora.directive';
import { UpperCasePipe } from './pipes/upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SinglePostComponent,
    PostDetailsComponent,
    ActivePostsComponent,
    NotFoundComponent,
    InactivePostsComponent,
    ColoraDirective,
    UpperCasePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
