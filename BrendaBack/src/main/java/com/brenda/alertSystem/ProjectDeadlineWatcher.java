package com.brenda.alertsystem;

import javax.jms.Topic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.brenda.conf.dao.ProjectRepo;
import com.brenda.utilities.DateConversion;

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
		jmsTemplate.convertAndSend(deadlineAlert, projectRepo.findProjectsEndingOnDate(DateConversion.TODAY_DATE_5)); 
    }
	@Scheduled(fixedRate = 10000)
    public void findOverdueProjects() {
		jmsTemplate.convertAndSend(OverdueAlert, projectRepo.findOverdueProjects()); 
    }
}