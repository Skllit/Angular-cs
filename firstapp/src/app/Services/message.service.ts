import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  api: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}
  getmessage() {
    return ['msg1', 'msg2'];
  }

  getPost(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }
}
