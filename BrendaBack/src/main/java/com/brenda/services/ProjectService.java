package com.brenda.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.brenda.abstractdao.ProjectDAOImpl;
import com.brenda.models.Project;

@Component
public class ProjectService {
	@Autowired
	ProjectDAOImpl projectDaoImpl;
	
	public void removeProject(long id) {
		projectDaoImpl.removeProject(id);
	}

	public long createProject(Project project) {
		return projectDaoImpl.createProject(project);
	}

	
	public int updateProject(long id, Project newProject) {
		return projectDaoImpl.updateProject(id, newProject);
	}

	public Map<Integer, List<Project>> getProjectsLike(String word,int minIndex, int maxIndex) {
		return projectDaoImpl.getProjectsLike(word, minIndex, maxIndex);
	}

	public double getRation() {
		return projectDaoImpl.getRation();
	}

	public int[] getProjectsOverview() {
		return projectDaoImpl.getProjectsOverview();
	}

}
