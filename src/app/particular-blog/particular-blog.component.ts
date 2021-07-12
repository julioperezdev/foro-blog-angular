import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-particular-blog',
  templateUrl: './particular-blog.component.html',
  styleUrls: ['./particular-blog.component.css']
})
export class ParticularBlogComponent implements OnInit {

  @Input() dataTransfer:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataTransfer)
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
