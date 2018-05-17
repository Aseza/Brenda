package com.brenda.models;

import javax.persistence.*;

@Entity
@Table(name="search_ratio")
public class Ration{

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	public Ration() { }

	@Column
	private double ratio;

	public long getId() {
		return id;
	}

	public Ration(double ratio) {
		this.ratio = ratio;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Ration(int id, double ratio) {
		this.id = id;
		this.ratio = ratio;
	}

	public double getRatio() {
		return ratio;
	}

	public void setRatio(double ratio) {
		this.ratio = ratio;
	}


	
}
