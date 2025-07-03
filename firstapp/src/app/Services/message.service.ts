import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Interface/Post.interface';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  api: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}
  getmessage() {
    return ['msg1', 'msg2'];
  }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api);
  }
}
