package com.brenda.alertsystem;
import javax.jms.Topic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import com.brenda.models.Project;

@Component
public class JmsPublisher {
	@Autowired
	JmsTemplate jmsTemplate;
	
	@Autowired
	@Qualifier("AddAlert")
	Topic topic;
	
	public void send(Project project){
		System.out.println("Sending a project to Topic");
		jmsTemplate.convertAndSend(topic, project);
	}
}
