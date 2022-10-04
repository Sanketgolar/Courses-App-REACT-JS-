package com.springex.crud.service;

import com.springex.crud.entities.course;

import java.util.List;

public interface courseService {

    public List<course> getCourses();
    public String getCoursebyId(int id);

    public void addCourse(course c);
}
