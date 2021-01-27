import { Component, OnInit } from '@angular/core';
import { PostsListServiceService } from '../posts-list-service.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})

export class PostsListComponent implements OnInit {
  private postsListServiceService;
  posts: any;
  constructor(postListService: PostsListServiceService) {
    this.postsListServiceService = postListService;
  }

  
  ngOnInit(): void {
    this.getPosts();
  }

  //fetch the posts
  getPosts(): void {
    this.postsListServiceService.getPosts().subscribe((data) => {
      console.log("Data: ", data); 
      this.posts = data;
    });
  }

}
