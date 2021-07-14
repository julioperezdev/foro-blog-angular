import { Component, OnInit, Input } from '@angular/core';
import {LocalBlogsServiceService} from "../services/local-blogs-service.service";

@Component({
  selector: 'app-particular-blog-page',
  templateUrl: './particular-blog-page.component.html',
  styleUrls: ['./particular-blog-page.component.css']
})
export class ParticularBlogPageComponent implements OnInit {

  @Input() particularBlog: any;

  constructor(private localBlogsService : LocalBlogsServiceService) { }

  ngOnInit(): void {
    // this.localBlogsService.selectedBlog.subscribe(data => {
    //   console.log("recibiendo data" + data)
    // })
    this.localBlogsService.subscribeBlog();
  }



}
