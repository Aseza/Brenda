package com.brenda.models;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name="pojects_table")
public class Project implements Serializable{

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	public Project() { }

	@Column
	private String name;
	@Column
	private String description;
	@Column(name="deadline")
	private Date deadline;

	public long getId() {
		return id;
	}

	public void setId(long id) {
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
