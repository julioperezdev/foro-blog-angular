import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-particular-blog',
  templateUrl: './particular-blog.component.html',
  styleUrls: ['./particular-blog.component.css']
})
export class ParticularBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public shareModal(){
    return Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }

}
