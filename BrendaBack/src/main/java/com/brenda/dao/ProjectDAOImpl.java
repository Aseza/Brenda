package com.brenda.dao;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import com.brenda.utilities.NumberOfRows;
import org.hibernate.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.brenda.model.Project;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import javax.validation.constraints.Null;

@Component
@Repository
@Transactional
public class ProjectDAOImpl implements ProjectDAO {

	@Autowired
	private SessionFactory sessionFactory;
	NumberOfRows rows;

	@Override
	public int removeProject(int id) {
		Query query = null;
		int result = -1;
		try{
		 	query = getCurrentSession().createQuery("delete from Project where id=:ID");
			query.setParameter("ID",id);
			result =  query.executeUpdate();
		} catch (Exception e){
			System.out.println("Can't create query, please check your entries");
		}
		return result;
	}

	@Override
	public int createProject(Project project) {
		Transaction tx1;
		int result = -1;
		try {
			tx1= getCurrentSession().beginTransaction();
			result = (Integer) getCurrentSession().save(project);
			tx1.commit();
		}catch (Exception e){
			System.out.println("Can't get the Transaction, please check your entries");
		}

		return result;
	}

	@Override
	public void updateProject(int id, Project newProject) {
		Transaction tx2;
		Project oldProject = (Project) getCurrentSession().load(Project.class, id);
		try{
			tx2= getCurrentSession().beginTransaction();
			oldProject.setDeadLine(newProject.getDeadLine());
			oldProject.setDescription(newProject.getDescription());
			oldProject.setName(newProject.getName());
			getCurrentSession().update(oldProject);
			tx2.commit();
		} catch (SessionException e){
			System.out.println("Session issue, Please Check Entries, Update Failed");
		} catch (NullPointerException e){
			System.out.println("The project object was not loaded/initialized successfully...Update Failed");
		}


	}

	@Override
	public Map<Integer, List<Project>> getProjectsLike(String word,int minIndex, int maxIndex) {
		Query query = getCurrentSession().createQuery("From Project as pr where pr.name  like ?");
		query.setString(0, "%" + word + "%");
		int size = query.list().size();
		query.setFirstResult(minIndex);
		query.setMaxResults(maxIndex);
		Map<Integer, List<Project>> list = new HashMap<Integer, List<Project>>();
		list.put(size,query.list());
		return list;
	}

	public Session getCurrentSession(){
		return sessionFactory.getCurrentSession();
	}

}
