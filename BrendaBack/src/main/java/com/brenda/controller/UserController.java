package com.brenda.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.brenda.alertsystem.JmsPublisher;
import com.brenda.conf.dao.RationRepo;
import com.brenda.models.Project;
import com.brenda.models.Ration;
import com.brenda.services.ProjectService;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	private ProjectService projectService;
	
	@Autowired
	RationRepo rationRepo;
	@Autowired
	JmsPublisher jPub;

	@RequestMapping(value = "/remove", method = RequestMethod.DELETE)
	public void removeProject(@RequestParam long id) {
		projectService.removeProject(id);
	}

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public long createProject(@RequestBody Project pro) {
		jPub.send(pro);
		return projectService.createProject(pro);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public void removeProject(@RequestBody Project pro) {
		projectService.updateProject(pro.getId(), pro);
	}

	@RequestMapping(value = "/ratios", method = RequestMethod.GET)
	public List<Ration> getRatios() {
		return (List<Ration>) rationRepo.getLast10Ration();
	}
	
	@RequestMapping(value = "/getProjectsOverview", method = RequestMethod.GET)
	public int[] getProjectsOverview() {
		return  projectService.getProjectsOverview();
	}
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public Map<Integer, List<Project>> getProjectsLike(@RequestParam String word, @RequestParam int minIndex,
			@RequestParam int maxIndex) {
		if (word == "") {
			throw new IllegalArgumentException("Word Cannot Be Empty");
		}
		
		Map<Integer,List<Project>> list = projectService.getProjectsLike(word, minIndex, maxIndex);
		rationRepo.save(new Ration(projectService.getRation()));
		return list;
	}

}
