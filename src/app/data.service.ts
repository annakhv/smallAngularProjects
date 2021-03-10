import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {BASE_API_URL, API_KEY} from '../config';
import {IArticles, IArticleSource, IResponce} from './articles'
import {filter} from './home/filter'


@Injectable ({
  providedIn: 'root'
})


export class DataService {
   private baseUrl : string=BASE_API_URL;
   private apiKey : string=API_KEY;
   constructor(private http: HttpClient) { }
   getArticles(data:filter) : Observable<IResponce> {
     return this.http.get<IResponce>(
          `${this.baseUrl}/everything?q=bitcoin&from=${data.from}&to=${data.to}&pageSize=${data.pageSize}&page=${data.page}&apiKey=${this.apiKey}`
     )


   }



}
