package com.brenda.conf.dao;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.brenda.models.Ration;

@Repository
public interface RationRepo extends CrudRepository<Ration, Long> {
	List<Ration> findAll(Sort sort);
	@Query(value = "SELECT * FROM search_ratio ORDER BY ID DESC LIMIT 10",nativeQuery = true)
	List<Ration> getLast10Ration();
	

}
