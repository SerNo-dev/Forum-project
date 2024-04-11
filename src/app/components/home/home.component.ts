import { Component, OnInit } from '@angular/core';
import { PostService } from '../../models/post.service';
import { Post } from '../../interface/post.interface';
import { User } from '../../interface/user.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  user: User[] = [];

  constructor(private postSrv: PostService) {}
  ngOnInit(): void {
    this.postSrv.getPosts().subscribe((postsData) => {
      this.posts = postsData;
      
      this.postSrv.getUser().subscribe((usersData) => {
        this.user = usersData;

      });
    });
  }
  
 
  
}
