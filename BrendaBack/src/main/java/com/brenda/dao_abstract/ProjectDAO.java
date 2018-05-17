package com.brenda.dao_abstract;

import java.util.List;
import java.util.Map;

import com.brenda.models.Project;

public interface ProjectDAO {

	void removeProject(long id);
	long createProject(Project project);
	int updateProject(long id, Project project);
	Map<Integer, List<Project>> getProjectsLike(String word, int minIndex, int maxIndex);
	double getRation();
}
