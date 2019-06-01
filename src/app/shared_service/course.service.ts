import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Course} from '../course';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private baseUrl:string="http://localhost:8089/course";
  private headers= new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private course:Course;

  constructor(private _http:Http) { }

  getCourses(){

    return this._http.get(this.baseUrl+'/getCourses',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getCourse(id:Number){

    return this._http.get(this.baseUrl+'/getCourse/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  deleteCourse(id:Number){

    return this._http.delete(this.baseUrl+'/deleteCourse/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createCourse(course:Course){

    return this._http.post(this.baseUrl+'/addCourse',JSON.stringify(course),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateCourse(id:Number,course:Course){

    return this._http.put(this.baseUrl+'/updateCourse/'+id,JSON.stringify(course),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
  }

  setter(course:Course){
    this.course=course;
  }

  getter(){
    return this.course;
  }

}
