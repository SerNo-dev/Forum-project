import { Component, OnInit } from '@angular/core';
import { PostService } from '../../models/post.service';
import { Post } from '../../interface/post.interface';
import { User } from '../../interface/user.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  user: User[] = [];
   local = localStorage.getItem('user')
  constructor(private postSrv: PostService, private router: Router) {}
  ngOnInit(): void {
  
    if (!this.local) {
      this.router.navigate(['/login']);
    }
    this.postSrv.getPosts().subscribe((postsData) => {
      this.posts = postsData;

      this.postSrv.getUser().subscribe((usersData) => {
        this.user = usersData;
      });
    });
  }
}
