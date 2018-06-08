package com.brenda.models;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Project{

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private String name;
	@Column
	private String description;
	@Column(name="deadline")
	private Date deadline;

	
	public Project() { }
	public long getId() {
		return id;
	}
	public Date getDeadline() {
		return deadline;
	}
	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}

	public void setId(long id) {
		this.id = id;
	}
	public String getName() {		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Project(String name, String description, Date deadline) {
		this.name = name;
		this.description = description;
		this.deadline = deadline;
	}
	public Date getDeadLine() {
		return deadline;
	}
	public void setDeadLine(Date deadline) {
		this.deadline = deadline;
	}
	
}
