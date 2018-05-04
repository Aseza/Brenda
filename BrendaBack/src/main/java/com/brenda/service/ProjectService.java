/**
 * 
 */
package com.brenda.service;

import java.util.List;
import java.util.Map;

import com.brenda.model.Project;

public interface ProjectService {

	int removeProject(int id);
	int createProject(Project project);
	void updateProject(int id, Project project);
	Map<Integer, List<Project>> getProjectsLike(String word,int minIndex, int maxIndex);
	Long getAllRowsCount();



}
