import { Component } from '@angular/core';
import { iPost } from '../../Model/i-post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent {
  active!: iPost[];

  constructor(private postSrv: PostService) {
    this.active = this.postSrv.activePost;
  }

  //Button che display il form
  show: boolean = false;

  toggle() {
    this.show = !this.show;
  }
}
