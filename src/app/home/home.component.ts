import { Component, OnInit } from '@angular/core';
import {DataService} from  '../data.service';
import {IResponce,IArticles} from '../articles';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

listArticles:IArticles[] =[]
  constructor(private _DataService: DataService) { }

  ngOnInit():  void {
    this._DataService.getArticles() 
    .subscribe((responce: IResponce) =>  {
      if (responce.status == 'ok'){
        this.listArticles = responce.articles;
        console.log( responce.articles)

      }
    });
  }

}
