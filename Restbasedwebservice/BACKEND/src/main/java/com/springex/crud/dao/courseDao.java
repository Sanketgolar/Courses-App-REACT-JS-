package com.springex.crud.dao;

import com.springex.crud.entities.course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface courseDao extends JpaRepository<course,Integer> {
}
