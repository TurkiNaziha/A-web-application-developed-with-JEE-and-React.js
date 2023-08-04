package Avancement.EmployeTest;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
/**
 *
 * @author Ahmed
 */
    @XmlRootElement 
    @jakarta.xml.bind.annotation.XmlRootElement(name = "planning_task") 
    @Entity @Table(name = "planning_task")
public class Planning_task {
	
	
    	@Id  @GeneratedValue( strategy=GenerationType.IDENTITY )
    	@ManyToOne(cascade = CascadeType.REMOVE)
    	@JoinColumn( name="id_projet" )
    	
    	    	private Projet  idProjet; 
    	//private Tache idTache;
    	///private int  idProjet; 
    	@Id  @GeneratedValue( strategy=GenerationType.IDENTITY )
    	private int idTache;
        private int niveauDifficulte;
        private int nbJours;
       // private Employe responsable;
        private int responsable;
        public boolean isChecked() {
			return checked;
		}








		public void setChecked(boolean checked) {
			this.checked = checked;
		}




		private boolean checked;

        public Planning_task() {
		
		}

        
        
        
        
        
        
	
	 @Override
		public String toString() {
			return "Planning_task [idProjet=" + idProjet.toString() + ", idTache=" + idTache + ", niveauDifficulte="
					+ niveauDifficulte + ", nbJours=" + nbJours + ", responsable=" + responsable + "]";
		}








	public Planning_task(Projet idProjet, int idTache, int niveauDifficulte, int nbJours,
			 int responsable) {
			super();
			
			this.idProjet = idProjet;
			this.idTache = idTache;
			this.niveauDifficulte = niveauDifficulte;
			this.nbJours = nbJours;
			this.responsable = responsable;
		}









	public Projet getIdProjet() {
		return idProjet;
	}




	public void setIdProjet(Projet idProjet) {
		this.idProjet = idProjet;
	}




	public int getIdTache() {
		return idTache;
	}




	public void setIdTache(int idTache) {
		this.idTache = idTache;
	}




	public int getNiveauDifficulte() {
		return niveauDifficulte;
	}




	public void setNiveauDifficulte(int niveauDifficulte) {
		this.niveauDifficulte = niveauDifficulte;
	}




	public int getNbJours() {
		return nbJours;
	}




	public void setNbJours(int nbJours) {
		this.nbJours = nbJours;
	}




	public int getResponsable() {
		return responsable;
	}




	public void setResponsable(int responsable) {
		this.responsable = responsable;
	}




	{
	
	}



	

}
