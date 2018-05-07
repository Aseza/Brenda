package com.brenda.dao_abstract;

import com.brenda.model.Project;

import java.util.List;
import java.util.Map;

public interface ProjectDAO_Abstraction {

	void removeProject(long id);
	long createProject(Project project);
	int updateProject(long id, Project project);
	Map<Integer, List<Project>> getProjectsLike(String word, int minIndex, int maxIndex);

}
