package Avancement.EmployeTest;


import java.sql.Date;
import java.util.List;

import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author Ahmed
 */
    @XmlRootElement 
    @jakarta.xml.bind.annotation.XmlRootElement(name = "projet") 
    @JsonIgnoreProperties(ignoreUnknown = true)
   
public class Projet {
@Override
	public String toString() {
		return "Projet [id_projet=" + id_projet + ", name=" + name + ", jour_visite=" + jour_visite + ", DDB=" + DDB
				+ ", DDF=" + DDF + "]";
	}

private int id_projet;
private String name;
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
private Date jour_visite;
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
private Date DDB;
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
private Date DDF;
private int progression ;
@Transient
private List<Employe> employe ;





public List<Employe> getEmploye() {
	return employe;
}
public void setEmploye(List<Employe> employe) {
	this.employe = employe;
}
public int getProgression() {
	return progression;
}
public void setProgression(int progression) {
	this.progression = progression;
}
public int getId_projet() {
	return id_projet;
}
public void setId_projet(int id_projet) {
	this.id_projet = id_projet;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public Date getJour_visite() {
	return jour_visite;
}
public void setJour_visite(Date jour_visite) {
	this.jour_visite = jour_visite;
}
public Date getDDB() {
	return DDB;
}
public void setDDB(Date dDB) {
	DDB = dDB;
}
public Date getDDF() {
	return DDF;
}
public void setDDF(Date dDF) {
	DDF = dDF;
}




public Projet(int id_projet, String name, Date jour_visite, Date dDB, Date dDF
		) {
	super();
	this.id_projet = id_projet;
	this.name = name;
	this.jour_visite = jour_visite;
	DDB = dDB;
	DDF = dDF;

}

public Projet() {

}
}
