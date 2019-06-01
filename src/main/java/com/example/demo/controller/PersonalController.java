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

import com.example.demo.model.PersonalDetails;
import com.example.demo.repository.PersonalRepository;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins= {"http://localhost:4200","http://localhost:4200/student","http://localhost:4200/student/change"},allowedHeaders="*")
public class PersonalController {

	@Autowired
	PersonalRepository personalRepository;
	
	/*add personal details*/
	@PostMapping("/addStudent")
	public PersonalDetails createPersonalDetails(@Valid @RequestBody PersonalDetails per) {
		return personalRepository.save(per);
	}
	
	/*get all students' personal details*/
	@GetMapping("/getStudents")
	public List<PersonalDetails> getAllStudents(){
		return personalRepository.findAll();
	}
	
	/*get one student's personal detail by id*/
	@GetMapping("/getStudent/{id}")
	public ResponseEntity<PersonalDetails> getStudentById(@PathVariable(value="id") Long perid){
		
		PersonalDetails per = personalRepository.getOne(perid);
		if(per==null)
		{
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(per);
	}
	
	/*update personal details of a student by id*/
	@PutMapping("/updateStudent/{id}")
	public ResponseEntity<PersonalDetails> updateStudent(@PathVariable(value="id") Long perid,@Valid @RequestBody PersonalDetails perDetails){
		
		PersonalDetails per=personalRepository.getOne(perid);
		if(per==null)
		{
			return ResponseEntity.notFound().build();
		}
		per.setName(perDetails.getName());
		per.setGender(perDetails.getGender());
		per.setAge(perDetails.getAge());
		
		PersonalDetails updateStudent = personalRepository.save(per);
		return ResponseEntity.ok().body(updateStudent);
		}

		/*Delete one*/
		@DeleteMapping("/deleteStudent/{id}")
		public ResponseEntity<PersonalDetails> deleteStudent(@PathVariable(value="id") Long perid){
			PersonalDetails per=personalRepository.getOne(perid);
			if(per==null)
			{
				return ResponseEntity.notFound().build();
			}
			personalRepository.delete(per);
			return ResponseEntity.ok().build();
		}
	
}
