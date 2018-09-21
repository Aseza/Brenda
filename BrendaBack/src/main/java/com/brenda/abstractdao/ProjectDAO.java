package com.brenda.abstractdao;

import java.util.List;
import java.util.Map;

import com.brenda.conf.dao.ProjectRepo;
import com.brenda.models.Project;

public interface ProjectDAO {
	void removeProject(long id);
	long createProject(Project project);
	int updateProject(long id, Project project);
	Map<Integer, List<Project>> getProjectsLike(String word, int minIndex, int maxIndex);
	double getRation();
	public int[] getProjectsOverview();

}
