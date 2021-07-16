import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url: string = `/api/v1/blog`;

  constructor(private httpClient: HttpClient) { }

  public getAllBlogs(){
    return this.httpClient.get(this.url + `/getall`)
      .subscribe(response => {
        console.log(response);
      })
  }



}
