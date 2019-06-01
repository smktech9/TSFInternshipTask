import { Component, OnInit } from '@angular/core';
import {SongService} from '../../shared_service/song.service';
import {Song} from '../../song';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listsong',
  templateUrl: './listsong.component.html',
  styleUrls: ['./listsong.component.css']
})
export class ListsongComponent implements OnInit {
  private songs:Song[];

  
  constructor(private _songService:SongService,private _router:Router) { }

  ngOnInit() {
    this._songService.getSongs().subscribe((songs)=>{
      console.log(songs);
      this.songs=songs;
    },(error)=>{
      console.log(error);
    });
  }

  deleteSong(song){
    this._songService.deleteSong(song.id).subscribe((data)=>{
      this.songs.splice(this.songs.indexOf(song),1);
    },(error)=>{
      console.log(error);
    });
  }

  updateSong(song){
    this._songService.setter(song);
    this._router.navigate(['/song/change']);
  }

  newSong(){
    let song = new Song();
    this._songService.setter(song);
    this._router.navigate(['/song/change']);
  }

  navigateHome(){
    this._router.navigate(['/']);
  }

}
