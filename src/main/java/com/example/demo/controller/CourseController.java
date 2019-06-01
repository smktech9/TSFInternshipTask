package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CourseDetails;
import com.example.demo.repository.CourseRepository;

@RestController
@RequestMapping("/course")
@CrossOrigin(origins= {"http://localhost:4200","http://localhost:4200/course","http://localhost:4200/course/change"},allowedHeaders="*")
public class CourseController {
	
	@Autowired
	CourseRepository courseRepository;
	
	/*add course details*/
	@PostMapping("/addCourse")
	public CourseDetails createCourseDetails(@Valid @RequestBody CourseDetails course) {
		return courseRepository.save(course);
	}
	
	/*get all course details*/
	@GetMapping("/getCourses")
	public List<CourseDetails> getAllCourses(){
		return courseRepository.findAll();
	}
	
	/*get course details by id*/
	@GetMapping("/getCourse/{id}")
	public ResponseEntity<CourseDetails> getCourseById(@PathVariable(value="id") Long courseid){
		
		CourseDetails course = courseRepository.getOne(courseid);
		if(course==null)
		{
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(course);
	}
	
	/*update course by id*/
	@PutMapping("/updateCourse/{id}")
	public ResponseEntity<CourseDetails> updateCourse(@PathVariable(value="id") Long courseid,@Valid @RequestBody CourseDetails courseDetails){
		
		CourseDetails course=courseRepository.getOne(courseid);
		if(course==null)
		{
			return ResponseEntity.notFound().build();
		}
		course.setCourse(courseDetails.getCourse());
		course.setTechnologies(courseDetails.getTechnologies());
		course.setPlatform(courseDetails.getPlatform());
		course.setInstructors(courseDetails.getInstructors());
		
		CourseDetails updateCourse = courseRepository.save(course);
		return ResponseEntity.ok().body(updateCourse);
		}

		/*Delete course by id*/
		@DeleteMapping("/deleteCourse/{id}")
		public ResponseEntity<CourseDetails> deleteCourse(@PathVariable(value="id") Long courseid){
			CourseDetails course=courseRepository.getOne(courseid);
			if(course==null)
			{
				return ResponseEntity.notFound().build();
			}
			courseRepository.delete(course);
			return ResponseEntity.ok().build();
		}

}
