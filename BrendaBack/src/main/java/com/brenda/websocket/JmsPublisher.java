package com.brenda.websocket;
import javax.jms.Topic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import com.brenda.models.Project;

@Component
public class JmsPublisher {
	@Autowired
	JmsTemplate jmsTemplate;
	
	@Autowired
	Topic topic;
	
	public void send(Project project){
		System.out.println("Sending a project to Topic");
		jmsTemplate.convertAndSend(topic, project);
	}
}
