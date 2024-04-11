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

  postContent!: string;

  posts: Post[] = [];
  user: User[] = [];
   local = localStorage.getItem('user')
  constructor(private postSrv: PostService, private router: Router) {}

  ngOnInit(): void {
    this.postSrv.getPost().subscribe((data)=>{
      console.log(data);
      
      })
  }
  creatPost() {
    this.postSrv.post(this.postContent);
  }
 
}
