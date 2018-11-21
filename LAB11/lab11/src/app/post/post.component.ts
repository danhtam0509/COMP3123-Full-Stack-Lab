import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[];

  constructor(private postService: PostService, private http: Http) { 
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      console.log(response.json());
      this.posts = response.json();
    })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value}
    this.postService.createPost(post);
    this.posts.unshift(post);
  }

  updatePost(post) {
    this.postService.updatePost(post);
  }

  deletePost(post) {
    this.postService.deletePost(post);
  }



  ngOnInit() {
  }

  
  


}
