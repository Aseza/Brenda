package com.brenda.alertSystem;

import java.sql.Date;

import javax.jms.Topic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.brenda.conf_dao.ProjectRepo;

@Component
public class ProjectDeadlineWatcher {
	
	@Autowired
	private ProjectRepo projectRepo;
	@Autowired
	JmsTemplate jmsTemplate;
	
	@Autowired
	@Qualifier("DeadLineAlert")
	Topic deadlineAlert;
	
	@Autowired
	@Qualifier("OverdueAlert")
	Topic OverdueAlert;
	
	@Scheduled(fixedRate = 10000)
    public void findProjectsEndingOnDate() {
		jmsTemplate.convertAndSend(deadlineAlert, projectRepo.findProjectsEndingOnDate(new Date(2018-1900,4,27))); 
    }
	@Scheduled(fixedRate = 10000)
    public void findOverdueProjects() {
		jmsTemplate.convertAndSend(OverdueAlert, projectRepo.findOverdueProjects()); 
    }
}