import { Component, Input, OnInit } from '@angular/core';
import { BookTitlesService } from 'src/app/services/book-titles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(public bs:BookTitlesService) { }
  titles:object[]=[]
  ngOnInit(): void {
    this.bs.getTitles().subscribe(
      (data)=>this.titles=data,
      ()=>this.titles=[]
    )
  }

}
