package com.practicespring.project_a_back.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practicespring.project_a_back.entities.Course;
import com.practicespring.project_a_back.repo.CourseRepo;

import java.util.*;

@Service
public class CourseService {
    @Autowired
    private CourseRepo courseRepo;

    

    public List<Course> getAllCourses(){
        
        return courseRepo.findAll();
    }

    public Course addCourse(Course course){
        return courseRepo.save(course);
    }

    public Course getCourseById(int courseId){
        return courseRepo.findById(courseId);
    }

    public void deleteCourse(int courseId){
        courseRepo.deleteById(courseId);
    }

}
