package com.practicespring.project_a_back.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practicespring.project_a_back.entities.Course;

public interface CourseRepo extends JpaRepository<Course,Integer>{
    Course findById(int id);
}
