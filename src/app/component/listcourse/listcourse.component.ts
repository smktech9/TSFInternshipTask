import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../shared_service/course.service';
import {Course} from '../../course';
import {Router} from '@angular/router';


@Component({
  selector: 'app-listcourse',
  templateUrl: './listcourse.component.html',
  styleUrls: ['./listcourse.component.css']
})
export class ListcourseComponent implements OnInit {

  private courses:Course[];

  
  constructor(private _courseService:CourseService,private _router:Router) { }

  ngOnInit() {
    this._courseService.getCourses().subscribe((courses)=>{
      console.log(courses);
      this.courses=courses;
    },(error)=>{
      console.log(error);
    });
  }

  deleteCourse(course){
    this._courseService.deleteCourse(course.id).subscribe((data)=>{
      this.courses.splice(this.courses.indexOf(course),1);
    },(error)=>{
      console.log(error);
    });
  }

  updateCourse(course){
    this._courseService.setter(course);
    this._router.navigate(['/course/change']);
  }

  newCourse(){
    let course = new Course();
    this._courseService.setter(course);
    this._router.navigate(['/course/change']);
  }

  navigateHome(){
    this._router.navigate(['/']);
  }

}
