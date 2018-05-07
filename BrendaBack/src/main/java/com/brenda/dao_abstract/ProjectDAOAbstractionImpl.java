package com.brenda.dao_abstract;

import com.brenda.conf.ProjectRepo;
import com.brenda.model.Project;
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
public class ProjectDAOAbstractionImpl implements ProjectDAO_Abstraction {

	@Autowired
	private ProjectRepo projectRepo;

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

	@Override
	public Map<Integer, List<Project>> getProjectsLike(String word,int minIndex, int maxIndex) {
		Pageable topTen = new PageRequest(minIndex, maxIndex);
		List<Project> temp =(List<Project>) projectRepo.findByNameContaining(word,topTen);
		int size = projectRepo.findByNameContaining(word).size();
		Map<Integer, List<Project>> list = new HashMap<Integer, List<Project>>();
		list.put(size,temp);
		return list;

	}


}
