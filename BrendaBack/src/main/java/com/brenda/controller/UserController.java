package com.brenda.controller;


import com.brenda.dao_abstract.ProjectDAOAbstractionImpl;
import com.brenda.model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@Controller
public class UserController {
	
	@Autowired
	private ProjectDAOAbstractionImpl projectAbstractDao;


	@CrossOrigin
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public @ResponseBody
	Map<Integer, List<Project>> getProjectsLike(@RequestParam String word, @RequestParam int minIndex, @RequestParam int maxIndex) {
		if(word=="") {
			throw new IllegalArgumentException("Word Cannot Be Empty");
		}
		System.out.println(projectAbstractDao.getProjectsLike(word, minIndex, maxIndex));
		return projectAbstractDao.getProjectsLike(word, minIndex, maxIndex);
	}

	@CrossOrigin
	@RequestMapping(value = "/remove", method = RequestMethod.DELETE)
	public @ResponseBody void removeProject(@RequestParam long id){
		 projectAbstractDao.removeProject(id);
	}

	@CrossOrigin
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public @ResponseBody
	long createProject(@RequestBody Project pro){
		System.out.println("Adding a project: "+pro);
		return projectAbstractDao.createProject(pro);
	}

	@CrossOrigin
	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public @ResponseBody
	void removeProject(@RequestBody Project pro){
		System.out.println("Project Updating... "+ pro);
		projectAbstractDao.updateProject(pro.getId(),pro);
	}
	@CrossOrigin
	@RequestMapping(value = "/ratio", method = RequestMethod.GET)
	public @ResponseBody
	double getRatio(){
	return projectAbstractDao.getRatio();
	}


}
