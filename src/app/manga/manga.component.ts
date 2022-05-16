import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})


export class MangaComponent implements OnInit {
  query: any = "";
  manga: Manga[] = [];


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  // private getManga(mangaId: string): any {
  //   this.http.get<any>('https://api.mangadex.org/manga/' + mangaId).subscribe(results => {
  //     console.log(results.total);
  //     return results.total;
  //   });
  // }

  searchManga(query: string): any {
    this.http.get<any>('https://api.mangadex.org/manga?limit=10&title=' + query).subscribe(results => {
      console.log(results);
      let mangas: Mangas = results;
      // for (let i = 0; i < mangas.data.length; i++) {
      //   this.manga[0].data = mangas.data[0];
      // }
      for (let i = 0; i < mangas.data.length; i++) {
      console.log(mangas.data[i].attributes.title.en);
      }

    });
  }

  getJsonPlaceholder() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1').subscribe(results => {
      let user: User = results;
      console.log(user.title);
      console.log(results);
    })
  }

}

interface User {
  title: string;
}

//OH MY FUCKING GOD FIGURING OUT INTERFACES TOOK SO FUCKING LONNNNNNNNGGGGGGGG BUT NOW I FEEL SO ACCOMPLISHED :DDDDD
interface Mangas {
  data: [{
    id: string,
    type: string,
    attributes: {
      title: {
        en: string;
      }
    }
  }]
}

interface Manga {
  data: {
    id: string,
    type: string,
    attributes: {
      title: {
        en: string;
      }
    }
  }
}
