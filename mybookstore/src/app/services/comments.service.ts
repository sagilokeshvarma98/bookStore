import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(public hc:HttpClient) { }

  getComments(id:number):Observable<any>{
    return this.hc.get("http://localhost:9100/comments?bookId="+id)
  }

  postData(obj:any):Observable<any>{
    let httpOptions={
      headers : new HttpHeaders({
        'Content_Type' : "application/json"
      })
    }
    return this.hc.post("http://localhost:9100/comments",obj,httpOptions)
  }
}
