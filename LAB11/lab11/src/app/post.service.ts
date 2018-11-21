import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: Http) { 
  }

  createPost(post) {
    // create a post object, with field to create

    this.http.post('http://jsonplaceholder.typicode.com/posts', 
      JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
      })
  }

  updatePost(post): void {
    console.log(`update post: ${post.title}`);

    this.http.put('http://jsonplaceholder.typicode.com/posts' + '/' + post.id, 
      JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
      })
  }

  deletePost(post): void {
    console.log(`delete post: ${post.title}`);

    this.http.delete('http://jsonplaceholder.typicode.com/posts' + '/' + post.id)
      .subscribe(response => {
        console.log(response.json());
      })

  }
}
