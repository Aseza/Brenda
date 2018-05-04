package com.brenda.dao;

import java.util.List;
import java.util.Map;

import com.brenda.model.Project;

public interface ProjectDAO {

	int removeProject(int id);
	Long getAllRowsCount();
	int createProject(Project project);
	void updateProject(int id, Project project);
	Map<Integer, List<Project>> getProjectsLike(String word,int minIndex, int maxIndex);

}
