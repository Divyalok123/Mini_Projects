import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

//decorator -> tell that this service can be used by this root
@Injectable({
  providedIn: 'root'
})
export class PostsListServiceService {
  constructor(private http: HttpClient) {} 

  getPosts(): Observable<any>{
    return this.http.get<any>('https://dog.ceo/api/breeds/image/random');
  }
}
