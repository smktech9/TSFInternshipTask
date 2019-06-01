import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string="http://localhost:8089/student";
  private headers= new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private user:User;

  constructor(private _http:Http) { }

  getStudents(){

    return this._http.get(this.baseUrl+'/getStudents',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getStudent(id:Number){

    return this._http.get(this.baseUrl+'/getStudent/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  deleteStudent(id:Number){

    return this._http.delete(this.baseUrl+'/deleteStudent/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createStudent(user:User){

    return this._http.post(this.baseUrl+'/addStudent',JSON.stringify(user),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateStudent(id:Number,user:User){

    return this._http.put(this.baseUrl+'/updateStudent/'+id,JSON.stringify(user),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
  }

  setter(user:User){
    this.user=user;
  }

  getter(){
    return this.user;
  }

}
