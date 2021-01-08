import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts:Post[];

  constructor() { }

  getPosts(): Post[]{
    return this.posts=[
      {ownerName:'Jean-Luc',user_id:2, time: Date.now(),content:'Blabaaaaaaaaaa'},
      {ownerName:'Marie',user_id:3, time: Date.now(),content:'blobloooooooo'},
      {ownerName:'Billy Eliott',user_id:4, time: Date.now(),content:'Blibliiiiii'},
      {ownerName:'Rodolphe',user_id:5, time: Date.now(),content:'Blubluuuuuuu'}
    ];
  }
}
