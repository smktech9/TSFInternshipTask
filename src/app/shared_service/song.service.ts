import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Song} from '../song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private baseUrl:string="http://localhost:8089/song";
  private headers= new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private song:Song;

  constructor(private _http:Http) { }

  getSongs(){

    return this._http.get(this.baseUrl+'/getSongs',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getSong(id:Number){

    return this._http.get(this.baseUrl+'/getSong/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  deleteSong(id:Number){

    return this._http.delete(this.baseUrl+'/deleteSong/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createSong(song:Song){

    return this._http.post(this.baseUrl+'/addSong',JSON.stringify(song),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateSong(id:Number,song:Song){

    return this._http.put(this.baseUrl+'/updateSong/'+id,JSON.stringify(song),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
  }

  setter(song:Song){
    this.song=song;
  }

  getter(){
    return this.song;
  }
}
