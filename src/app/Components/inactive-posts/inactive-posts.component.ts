import { PostService } from './../../services/post.service';
import { Component } from '@angular/core';
import { iPost } from '../../Model/i-post';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  inactive!: iPost[];

  constructor(private postSrv: PostService) {
    this.inactive = this.postSrv.inactivePost;
  }

  //Button che display il form
  show: boolean = false;

  toggle() {
    this.show = !this.show;
  }
}
