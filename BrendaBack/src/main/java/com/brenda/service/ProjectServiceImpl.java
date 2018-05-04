/**
 *
 */
package com.brenda.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brenda.dao.ProjectDAO;
import com.brenda.model.Project;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectDAO projectDAO;


    @Override
    public int removeProject(int id) {
        return projectDAO.removeProject(id);
    }

    @Override
    public int createProject(Project project) {
        return projectDAO.createProject(project);
    }

    @Override
    public void updateProject(int id, Project project) {
        projectDAO.updateProject(id,project);

    }

    @Override
    public Map<Integer, List<Project>> getProjectsLike(String word,int minIndex, int maxIndex) {
        return projectDAO.getProjectsLike(word,minIndex,maxIndex);

    }
    @Override
    public Long getAllRowsCount() {
        return projectDAO.getAllRowsCount();
    }
}
