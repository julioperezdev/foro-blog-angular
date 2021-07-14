import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {LocalBlogsServiceService} from "../services/local-blogs-service.service";

@Component({
  selector: 'app-particular-blog',
  templateUrl: './particular-blog.component.html',
  styleUrls: ['./particular-blog.component.css']
})
export class ParticularBlogComponent implements OnInit {

  @Input() dataTransfer:any;

  constructor(private localBlogsService : LocalBlogsServiceService) { }

  ngOnInit(): void {
  }

  public showParticularInformation () {
    console.log(this.dataTransfer)
    this.localBlogsService.selectedBlog.emit({
      data: this.dataTransfer
    })
  }
}
