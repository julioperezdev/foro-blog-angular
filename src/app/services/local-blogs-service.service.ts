import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalBlogsServiceService {

  @Output() selectedBlog:EventEmitter<any> = new EventEmitter();
  filteredBlog: any;

  constructor() { }

  blogs: Array<any> =[
    {
      id:1,
      title:'La importancia del testing y cuales son las buenas practicas para implementarlo en nuestros proyectos',
      dates:'01-07-2021',
      imageUrl: 'https://blog.desafiolatam.com/wp-content/uploads/2018/05/java-logo.png',
      idCategory:1
    },
    {
      id:2,
      title:'Creando una Blockchain usando Hyperledger Fabric by IBM',
      dates:'02-08-2021',
      imageUrl: 'https://sithus.com/images/go.png',
      idCategory:2
    },
    {
      id:3,
        title:'Primeros pasos en el machine learning',
      dates:'03-09-2021',
      imageUrl: 'https://styles.redditmedia.com/t5_44bys0/styles/communityIcon_1b9oisyy3lp61.png',
      idCategory:3
    },
    {
      id:4,
        title:'Ventajas de usar el mejor lenguaje de programacion',
      dates:'04-10-2021',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      idCategory:4
    },
    {
      id:5,
        title:'Conectandose a mi base de datos con Postgres',
      dates:'05-11-2021',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
      idCategory:4
    }
    ]
  //
  // this.localBlogsService.selectedBlog.subscribe(data => {
  //     console.log("recibiendo data" + data)
  //   })

  public subscribeBlog() {
    this.selectedBlog.subscribe(data => {
      this.searchBlogById(data.id);
    })
  }

  public searchBlogById (id: number){
    console.log(this.filteredBlog = this.blogs.filter(particular => particular.id == id));
  }
}
