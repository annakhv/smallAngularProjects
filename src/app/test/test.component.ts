import { Component, OnInit } from '@angular/core';

interface anime {
  image_url: string,
  title: string,
  members: number,
  synopsis: string,
  score: number

}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
,
  styleUrls: ['./test.component.css']
})



export class TestComponent implements OnInit {
 
  constructor() { }
  public name: string ="Welcome to Naruto";
  public result : Array<anime>=[];
  public showHide : string ="";

  ngOnInit() {
       fetch('https://api.jikan.moe/v3/search/anime?q=naruto')
      .then((response) => response.json())
      .then((json: any) => {
        for(var item in json){
            if(json[item].length === 50){
              this.result=json[item]
              console.log(json[item])
              
            }
        }
      
      
      });
  }
public toggle(event: any){
  if (this.showHide === "visible"){
       this.showHide = "d-none";
  }else
  {
    this.showHide ="visible";
  }

}
}