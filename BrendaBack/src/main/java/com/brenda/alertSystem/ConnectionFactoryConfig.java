package com.brenda.alertSystem;

import javax.jms.ConnectionFactory;
import javax.jms.Topic;

import org.apache.activemq.ActiveMQConnectionFactory;
import org.apache.activemq.command.ActiveMQTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.support.converter.MappingJackson2MessageConverter;
import org.springframework.jms.support.converter.MessageConverter;
import org.springframework.jms.support.converter.MessageType;

@Configuration
@EnableJms
public class ConnectionFactoryConfig {
	@Value("${jsa.activemq.broker.url}")
	String brokerUrl;
	
	@Value("${jsa.activemq.borker.username}")
	String userName;
	
	@Value("${jsa.activemq.borker.password}")
	String password;
	
	@Bean(name="AddAlert")
	public Topic addAlertTopic() {
			return new ActiveMQTopic("AddAlert");
	}
	
	@Bean(name="DeadLineAlert")
	public Topic deadLineAlertTopic() {
			return new ActiveMQTopic("DeadLineAlert");
	}
	@Bean(name="OverdueAlert")
	public Topic OverdueAlertTopic() {
			return new ActiveMQTopic("OverdueAlert");
	}

    @Bean
    public ConnectionFactory connectionFactory(){
        ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory();
        connectionFactory.setBrokerURL(brokerUrl);
        connectionFactory.setUserName(userName);
        connectionFactory.setPassword(password);
        return connectionFactory;
    }

	@Bean // Serialize message content to json using TextMessage
	public MessageConverter jacksonJmsMessageConverter() {
	    MappingJackson2MessageConverter converter = new MappingJackson2MessageConverter();
	    converter.setTargetType(MessageType.TEXT);
	    converter.setTypeIdPropertyName("_type");
	    return converter;
	}
    
    /*
     * Used for sending Messages.
     */
	@Bean
	public JmsTemplate jmsTemplate(){
	    JmsTemplate template = new JmsTemplate();
	    template.setConnectionFactory(connectionFactory());
	    template.setMessageConverter(jacksonJmsMessageConverter());
	    template.setPubSubDomain(true);
	    return template;
	}
}
