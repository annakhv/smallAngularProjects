import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DataService} from  '../data.service';
import {IResponce,IArticles} from '../articles';
import {Router} from '@angular/router';
import { filter} from './filter';
import {DatePipe} from '@angular/common/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  listArticles: IArticles[] =[];
  date =new Date().toISOString().slice(0, 10)


  dataFilter = new filter(60, 1, this.date, this.date)
  @Output() public childEvent = new EventEmitter();
  constructor(private _DataService: DataService, private router: Router) { }

  ngOnInit():  void {
        this.loadArticles()
 
     
  
  }

private loadArticles(){
this._DataService.getArticles(this.dataFilter) 
    .subscribe((responce: IResponce) =>  {
      if (responce.status == 'ok'){
        this.listArticles = responce.articles;
        console.log( responce.articles);
      }
    });
}

onclick(data: IArticles){

 this.childEvent.emit(data);
 console.log(data)
 this.router.navigate(['details/', data.title])

}

onSubmit() {
 this.loadArticles()

}
}
