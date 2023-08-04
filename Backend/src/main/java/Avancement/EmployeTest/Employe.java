package Avancement.EmployeTest;

import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Ahmed
 */
    @XmlRootElement 
    @jakarta.xml.bind.annotation.XmlRootElement(name = "employes") 

public class Employe {
	
	
	@Override
	public String toString() {
		return "Employe [id=" + id + ", fullName=" + fullName + ", experience=" + experience + "]";
	}

	private int id; 

    private String fullName; 

    private String experience;

	public Employe(int id, String fullName, String experience) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.experience = experience;
	}

	public Employe() {
		
	}
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}
	 

}
