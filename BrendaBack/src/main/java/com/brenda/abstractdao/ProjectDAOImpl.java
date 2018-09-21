package com.brenda.abstractdao;

import com.brenda.conf.dao.ProjectRepo;
import com.brenda.models.Project;
import com.brenda.utilities.DateConversion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@Repository
@Transactional
public class ProjectDAOImpl implements ProjectDAO{

	@Autowired
	private ProjectRepo projectRepo;
	int size= -1;

	@Override
	public void removeProject(long id) {
		projectRepo.deleteById(id);
	}

	@Override
	public long createProject(Project project) {
		return projectRepo.save(project).getId();
	}

	@Override
	public int updateProject(long id, Project newProject) {
		Project oldProject = projectRepo.getOne(id);
		try{
			oldProject.setDeadLine(newProject.getDeadLine());
			oldProject.setDescription(newProject.getDescription());
			oldProject.setName(newProject.getName());
			projectRepo.save(oldProject);
			return 1;
		} catch (Exception e){
			System.out.println("Session issue, Please Check Entries, Update Failed");
			return 0;
		}
	}
	@SuppressWarnings("deprecation")
	@Override
	public Map<Integer, List<Project>> getProjectsLike(String word,int minIndex, int maxIndex) {
		Pageable page = new PageRequest(minIndex, maxIndex);
		List<Project> temp = projectRepo.findByNameContaining(word,page);
		size = projectRepo.findByNameContaining(word).size();
		Map<Integer, List<Project>> list = new HashMap<Integer, List<Project>>();
		list.put(size,temp);
		return list;
	}
	@Override
	public double getRation() {
		return (double)size/projectRepo.count();
	}

	@Override
	public int[] getProjectsOverview() {
		int projectsEndingOnDateSize = projectRepo.findProjectsEndingOnDate(DateConversion.TODAY_DATE_5).size();
		int overdueProjectsSize = projectRepo.findOverdueProjects().size();
		int totalProjectsSize = ((List <Project>) projectRepo.findAll()).size();
		return new int[] {projectsEndingOnDateSize,overdueProjectsSize,totalProjectsSize-overdueProjectsSize-projectsEndingOnDateSize};
	}

}
