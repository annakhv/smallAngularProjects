import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IArticles} from '../articles';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let title = this.route.snapshot.paramMap.get('title');
    console.log(title)
  }

}
