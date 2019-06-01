import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../shared_service/course.service';
import {Course} from '../../course';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  private course:Course;

  constructor(private _courseService:CourseService,private _router:Router) { }

  ngOnInit() {
    this.course=this._courseService.getter();
  }

  processCourseForm(){
    if(this.course.id==undefined){
      this._courseService.createCourse(this.course).subscribe((course)=>{
        console.log(course);
        this._router.navigate(['/course']);
      },(error)=>{
        console.log(error);
      });
      }
      else{
          this._courseService.updateCourse(this.course.id,this.course).subscribe((course)=>{
            console.log(course);
            this._router.navigate(['/course']);
          },(error)=>{
            console.log(error);
          });
          }
      
    }

}
