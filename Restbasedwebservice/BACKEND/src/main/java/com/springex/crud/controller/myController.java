package com.springex.crud.controller;


import com.springex.crud.entities.course;
import com.springex.crud.service.courseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
//import
import java.util.List;
@CrossOrigin("http://localhost:3000")
@RestController
public class myController {

    @Autowired
    private courseService cs;
    @GetMapping("/home")
    public String Welcome(){
        return "Welcome! \n Get new cources for free here";
    }

    @GetMapping("/courses")
    public List<course> getCourses()
    {
        return this.cs.getCourses();
    }
    @GetMapping("/courses/{cid}")
    public String courseById(@PathVariable String cid){
        return this.cs.getCoursebyId(Integer.parseInt(cid));
    }

    @PostMapping("/courses")
    public void addCourse(@RequestBody course c)
    {
         this.cs.addCourse(c);
    }

}
