import { User } from './../interface/user.interface';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interface/post.interface';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';
import { log } from 'console';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient,private db:AngularFireDatabase) {}
  post(post: string) {
    const user = localStorage.getItem('user') ?? '';
    const utente = JSON.parse(user);
    let data={
      post:post,
      uId:utente.uid,
      completed:false
    }
    return this.db.list('post').push(data);
  }
  getPost() {
    return this.db.list('post').snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({
          key: c.payload.key,
          ...(c.payload.val() as object)
        }))
      )
    );
  }
}
