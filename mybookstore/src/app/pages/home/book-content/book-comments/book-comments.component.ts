import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-comments',
  templateUrl: './book-comments.component.html',
  styleUrls: ['./book-comments.component.css']
})
export class BookCommentsComponent implements OnInit {

  @Input() bookId:any
  commentForm:any
  constructor(public formBuild:FormBuilder ,public commentSer:CommentsService ){
      this.commentForm = this.formBuild.group(
        {
          name:['',[Validators.required,Validators.minLength(3)]],
          emailId:['',[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],
          comment:['',Validators.required,Validators.minLength(20)]
        }
      )
  }
  ngOnInit(): void {
  }

  postComment(){
      var obj = {
        name:this.commentForm.value.name,
        emailId:this.commentForm.value.emailId,
        comment:this.commentForm.value.comment,
        bookId:this.bookId
      }
      this.commentSer.postData(obj).subscribe(
        ()=>alert("Thanks for commenting")
      )
  }
}

  //Refet to this for gunction validations
  //name:['',[Validators.required,isSymbols]],

// function isSymbols(input: FormControl){
//   let temp:RegExp=new RegExp('[\._$@0-9]'); 
//   let temp1:boolean=false;
//   if(!temp.test(input.value))
//       temp1=true;

//     return temp1?null:{needFormat:true};
// }