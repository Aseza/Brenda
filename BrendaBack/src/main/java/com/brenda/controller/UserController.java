package com.brenda.controller;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import com.brenda.utilities.NumberOfRows;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.brenda.model.Project;
import com.brenda.service.ProjectService;

@Controller
public class UserController {
	
	@Autowired
	private ProjectService projectService;

	@Autowired
	private SessionFactory sf;

	@CrossOrigin
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public @ResponseBody
	Map<Integer, List<Project>> getProjectsLike(@RequestParam String word,@RequestParam int minIndex,@RequestParam int maxIndex) {
		return projectService.getProjectsLike(word, minIndex, maxIndex);
	}
	@CrossOrigin
	@RequestMapping(value = "/remove", method = RequestMethod.GET)
	public @ResponseBody
	int removeProject(@RequestParam int id){
		return projectService.removeProject(id);
	}
	@CrossOrigin
	@RequestMapping(value = "/create", method = RequestMethod.GET)
	public @ResponseBody
	long createProject( @RequestParam String name, @RequestParam String desc, @RequestParam Date deadline){
		return projectService.createProject(new Project(name,desc,deadline));
	}
	@CrossOrigin
	@RequestMapping(value = "/update", method = RequestMethod.GET)
	public @ResponseBody
	void removeProject(@RequestParam int id, @RequestParam String name, @RequestParam String desc, @RequestParam Date deadline){
		 projectService.updateProject(id,new Project(name,desc,deadline));
	}



}
