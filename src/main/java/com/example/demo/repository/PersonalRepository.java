package com.example.demo.repository;

import com.example.demo.model.PersonalDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalRepository extends JpaRepository<PersonalDetails,Long> {

}
