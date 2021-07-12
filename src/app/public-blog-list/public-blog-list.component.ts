import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-blog-list',
  templateUrl: './public-blog-list.component.html',
  styleUrls: ['./public-blog-list.component.css']
})
export class PublicBlogListComponent implements OnInit {

  public blogs: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    this.blogs = [
      {
        id:1,
        title:'La importancia del testing y cuales son las buenas practicas para implementarlo en nuestros proyectos',
        dates:'01-07-2021',
        imageUrl: 'https://blog.desafiolatam.com/wp-content/uploads/2018/05/java-logo.png'
      },
      {
        id:2,
        title:'Creando una Blockchain usando Hyperledger Fabric by IBM',
        dates:'02-08-2021',
        imageUrl: 'https://sithus.com/images/go.png'
      },
      {
        id:3,
        title:'Primeros pasos en el machine learning',
        dates:'03-09-2021',
        imageUrl: 'https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png'
      },
      {
        id:4,
        title:'Ventajas de usar el mejor lenguaje de programacion',
        dates:'04-10-2021',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
        id:5,
        title:'Conectandose a mi base de datos con Postgres',
        dates:'05-11-2021',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'
      }
    ]
  }


}
