package Avancement.EmployeTest;

import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Ahmed
 */
    @XmlRootElement 
    @jakarta.xml.bind.annotation.XmlRootElement(name = "taches") 

public class Tache {
	
    	  public Tache(int id, String description) {
		super();
		this.id = id;
		this.description = description;
	}





		public int getId() {
			return id;
		}





		public void setId(int id) {
			this.id = id;
		}





		public String getDescription() {
			return description;
		}





		public void setDescription(String description) {
			this.description = description;
		}





		private int id;
    	private String description; 
	


	
	
	public Tache() {
	
	}
	

  

	

}
