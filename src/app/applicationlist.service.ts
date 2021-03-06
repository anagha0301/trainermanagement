import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApplicationlistService {
  item=[{
    name :'',
    email:'',
    phone:'',
    address:'',
    qualification:'',
    skillset:'',
    current:'',
    designation:'',
    appliedcourse:'',
    imageUrl:''
    }]
  constructor(private http:HttpClient) { }
  getApplicationlist(){
    return this.http.get("http://localhost:3000/Applicationlist");
  }

  getApplicationlis(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  newApplicationlist(item:any){
    return this.http.post("http://localhost:3000/insert",{"applicationlist":item})
    .subscribe(data =>{console.log(data)})
  }
  editProduct(applicationlist:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",applicationlist)
    .subscribe(data =>{console.log(data)})
  }
}
