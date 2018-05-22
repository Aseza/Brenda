package com.brenda.conf_dao;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.brenda.models.Project;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.List;

@Repository
public interface ProjectRepo extends CrudRepository<Project, Long> {
    List<Project> findByNameContaining(String word, Pageable page);
    List<Project> findByNameContaining(String word);
    Project getOne(Long id);
    void deleteById(long id);
    @Query("SELECT e FROM Project e WHERE e.deadline = :date ")
    List<Project> findProjectsEndingOnDate(@Param("date") Date date);
    
    @Query("SELECT e FROM Project e WHERE e.deadline < CURRENT_DATE ")
    List<Project> findOverdueProjects();
}