import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interface/post.interface';
import { User } from '../interface/user.interface';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<Post[]>(`${this.apiUrl}post`);
  }

  getUser() {
    return this.http.get<User[]>(`${this.apiUrl}users`);
  }
}
