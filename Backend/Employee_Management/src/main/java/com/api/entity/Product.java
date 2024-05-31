package com.api.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {
	@Id
    private int empid;
    private String firstname;
    private String lastname;
    private String designation;
    private String project;
    private String status;
    
	public Product() {	}

	public Product(int empid, String firstname, String lastname, String designation, String project, String status) {
		super();
		this.empid = empid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.designation = designation;
		this.project = project;
		this.status = status;
	}

	public int getEmpid() {
		return empid;
	}

	public void setEmpid(int empid) {
		this.empid = empid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	

    
}
