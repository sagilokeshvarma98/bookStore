import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookContentService } from 'src/app/services/book-content.service';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.css']
})
export class BookContentComponent implements OnInit {
  Content:any={}
  constructor(public route:ActivatedRoute, public cs:BookContentService, private comment:CommentsService) { }
  id:any
  comments:any
  ngOnInit(): void {
    this.route.params.subscribe(
      (idNo)=>{
        this.id = idNo.id
        console.log(this.id);
      },
      ()=>console.log("id no is not found")      
    )
      this.cs.getBookContent(this.id).subscribe(
        (data)=>this.Content = data
      )

      this.comment.getComments(this.id).subscribe(
        (data)=>this.comments = data,
        (err)=>console.log(err.message)
                
      )
  }

}
