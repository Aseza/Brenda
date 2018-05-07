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
		return projectAbstractDao.getProjectsLike(word, minIndex, maxIndex);
	}

	@CrossOrigin
	@RequestMapping(value = "/remove", method = RequestMethod.GET)
	public @ResponseBody void removeProject(@RequestParam long id){
		 projectAbstractDao.removeProject(id);
	}

	@CrossOrigin
	@RequestMapping(value = "/create", method = RequestMethod.GET)
	public @ResponseBody
	long createProject(@RequestParam String name, @RequestParam String desc, @RequestParam Date deadline){
		return projectAbstractDao.createProject(new Project(name,desc,deadline));
	}

	@CrossOrigin
	@RequestMapping(value = "/update", method = RequestMethod.GET)
	public @ResponseBody
	void removeProject(@RequestParam int id, @RequestParam String name, @RequestParam String desc, @RequestParam Date deadline){
		projectAbstractDao.updateProject(id,new Project(name,desc,deadline));
	}



}
