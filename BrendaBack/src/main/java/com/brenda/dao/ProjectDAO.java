package com.brenda.dao;

import java.util.List;
import java.util.Map;

import com.brenda.model.Project;
import com.brenda.utilities.NumberOfRows;

public interface ProjectDAO {

	int removeProject(int id);
	int createProject(Project project);
	void updateProject(int id, Project project);
	Map<Integer, List<Project>> getProjectsLike(String word,int minIndex, int maxIndex);

}
