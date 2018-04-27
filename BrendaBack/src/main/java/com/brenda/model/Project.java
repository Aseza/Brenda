package com.brenda.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name="pojects_table")
public class Project implements Serializable{

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	public Project() { }

	@Column
	private String name;
	@Column
	private String description;
	@Column(name="deadline")
	private Date deadline;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
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
