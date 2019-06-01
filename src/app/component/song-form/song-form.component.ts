import { Component, OnInit } from '@angular/core';
import {SongService} from '../../shared_service/song.service';
import {Song} from '../../song';
import {Router} from '@angular/router';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent implements OnInit {

  private song:Song;

  constructor(private _songService:SongService,private _router:Router) { }

  ngOnInit() {
    this.song=this._songService.getter();
  }

  processSongForm(){
    if(this.song.id==undefined){
      this._songService.createSong(this.song).subscribe((song)=>{
        console.log(song);
        this._router.navigate(['/song']);
      },(error)=>{
        console.log(error);
      });
      }
      else{
          this._songService.updateSong(this.song.id,this.song).subscribe((song)=>{
            console.log(song);
            this._router.navigate(['/song']);
          },(error)=>{
            console.log(error);
          });
          }
      
    }
  
}
