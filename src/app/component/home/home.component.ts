import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  navigateStudent(){
    this._router.navigate(['/student']);
  }

  navigateSong(){
    this._router.navigate(['/song']);
  }

  navigateCourse(){
    this._router.navigate(['/course']);
  }

}
