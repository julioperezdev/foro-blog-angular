import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = `/api/v1/category`;

  constructor(private httpClient: HttpClient) { }


  public getAllCategory(){
    return this.httpClient.get(this.url + `/getall`)
      .subscribe(response => {
        console.log(response);
      })
  }
}
