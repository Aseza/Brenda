package com.brenda.controller;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.brenda.alertSystem.Issue;
import com.brenda.alertSystem.JmsPublisher;
import com.brenda.conf_dao.RationRepo;
import com.brenda.dao_abstract.ProjectDAOImpl;
import com.brenda.models.Project;
import com.brenda.models.Ration;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	private ProjectDAOImpl projectAbstractDao;
	
	@Autowired
	RationRepo rationRepo;
	@Autowired
	JmsPublisher jPub;
	
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public Map<Integer, List<Project>> getProjectsLike(@RequestParam String word, @RequestParam int minIndex,
			@RequestParam int maxIndex) {
		System.out.println("Getting projects....");
		if (word == "") {
			throw new IllegalArgumentException("Word Cannot Be Empty");
		}
		Map<Integer,List<Project>> list = projectAbstractDao.getProjectsLike(word, minIndex, maxIndex);
		rationRepo.save(new Ration(projectAbstractDao.getRation()));
		return list;
	}

	@RequestMapping(value = "/remove", method = RequestMethod.DELETE)
	public void removeProject(@RequestParam long id) {
		System.out.println("Removing project....");
		projectAbstractDao.removeProject(id);
	}

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public long createProject(@RequestBody Project pro) {
		System.out.println("Adding a project: " + pro);
		jPub.send(pro);
		return projectAbstractDao.createProject(pro);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public void removeProject(@RequestBody Project pro) {
		System.out.println("Project Updating... " + pro);
		projectAbstractDao.updateProject(pro.getId(), pro);
	}

	@RequestMapping(value = "/ratios", method = RequestMethod.GET)
	public List<Ration> getRatios() {
		return (List<Ration>) rationRepo.getLast10Ratios();
	}

}
