package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.CourseDetails;

public interface CourseRepository extends JpaRepository<CourseDetails,Long>{

}
