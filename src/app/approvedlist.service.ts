import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApprovedlistService {
  // item=[{
  //   name :'',
  //   email:'',
  //   phone:'',
  //   address:'',
  //   qualification:'',
  //   skillset:'',
  //   current:'',
  //   designation:'',
  //   appliedcourse:'',
  //   imageUrl:''
  //   }]
  constructor(private http:HttpClient) {} 
    getApprovedlist(id:any){
      return this.http.get("http://localhost:3000/Apprrovedlist/"+id);
    }
  
}
