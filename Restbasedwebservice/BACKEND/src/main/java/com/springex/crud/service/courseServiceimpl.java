package com.springex.crud.service;

import com.springex.crud.dao.courseDao;
import com.springex.crud.entities.course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import com.mysql.jdbc.Driver;

import java.util.ArrayList;
import java.util.List;
@Service
public class courseServiceimpl implements courseService{

    @Autowired
    private courseDao cdao;
    //List<course> list;

    public courseServiceimpl(){

    }

    @Override
    public List<course> getCourses() {


        return cdao.findAll();
    }

@Override
  public String getCoursebyId(int id)
  {

        return cdao.getReferenceById(id).toString();
  }
@Override
  public void addCourse(course c)
  {
      if(c.getId()!=0 )
      cdao.save(c);
  }
}
