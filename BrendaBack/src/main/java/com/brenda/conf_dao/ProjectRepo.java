package com.brenda.conf_dao;


import com.brenda.model.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;
import java.util.List;

@Repository
public interface ProjectRepo extends CrudRepository<Project, Long> {
    List<Project> findByNameContaining(String word, Pageable page);
    List<Project> findByNameContaining(String word);
    Project getOne(Long id);
    void deleteById(long id);
}