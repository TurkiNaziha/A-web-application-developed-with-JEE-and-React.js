package Avancement.EmployeTest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;  

 

public class ProjetBD {


	 Connection con=null;
	public ProjetBD()
	{
		String url ="jdbc:mysql://localhost:3306/avancement_app";
		String username="root";
		String password="";
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
		con=DriverManager.getConnection(url,username,password);
		}
		catch(Exception e) {
			System.out.println(e);
		}
	}

	BookEmployeeBD repo=new BookEmployeeBD();
	  
    
    
    
     public  List<Projet> getProjet() { 
    	 List<Projet> lesProjets=new ArrayList<>();
    	 List<Employe> lesEmployes=repo.getEmployes();
    	 Employe lesNewEmployes=new Employe();
    	Planning_task lesPlannignTask=new Planning_task();
    	 String sql="select * from projet";
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 while(rs.next())
    		 {
    			 Projet t=new Projet();
    			System.out.println(rs.getDate(3));
    			t.setId_projet(rs.getInt(1));
    			t.setName(rs.getString(2));
    			t.setJour_visite(rs.getDate(3));;
    			t.setDDB(rs.getDate(4));
    			t.setDDF(rs.getDate(5));
    			t.setProgression(rs.getInt(6));
    		   
    			/*
                  for(int i=0;i<lesEmployes.size();i++)
                  {
                	  if(rs.getInt(1)==lesEmployes[i].getId())
                	  {
                	  Employe e= lesEmployes[i]
                			  lesNewEmployes.add(e);
                	  }
                  }*/
    			/*
    			t.setLesEmployes(lesNewEmployes);
    			t.setLesTaches(lesPlannignTask);*/
    			
    			 lesProjets.add(t);
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return lesProjets; 
     } 
     
     
     
     
     
     
     
    // Planning_taskBD repo1=new Planning_taskBD();
     
     public  List<Projet> getProjetWithEmployes() { 
    	 List<Projet> lesProjets=new ArrayList<>();
    	 //List<Employe> lesEmployes=repo.getEmployes();
    	 //Employe lesNewEmployes=new Employe();
    	//Planning_task lesPlannignTask=new Planning_task();
    	 String sql="select * from projet";
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 while(rs.next())
    		 {
    			 Projet t=new Projet();
    			System.out.println(rs.getDate(3));
    			t.setId_projet(rs.getInt(1));
    			t.setName(rs.getString(2));
    			t.setJour_visite(rs.getDate(3));;
    			t.setDDB(rs.getDate(4));
    			t.setDDF(rs.getDate(5));
    			t.setProgression(rs.getInt(6));
    			/********/
    			List<Planning_task> lesPlanningTasks=new ArrayList<>();
    	    	
    	    	//  List<Employe> lesEmplyes=repo.getEmployes();
    	    	 	// List<Tache> Tasks=repo1.getTaches();
    	    	 	 //List<Projet> lesProjets=repo2.getProjet();
    	    	 String sql1="select DISTINCT(id_responsable) from planning_task where id_projet = " + rs.getInt(1);
    	    	
    	    		 Statement st1=con.createStatement();
    	    		 ResultSet rs1=st1.executeQuery(sql1);
    	    		 while(rs1.next())
    	    		 {
    	    			 Planning_task t1=new Planning_task();
    	    			 //Employe e=new Employe();
    	    			 //Tache tch=new Tache();
    	    			 
    	    					 
    	    			System.out.println("ggggggg");
    	    			t1.setIdProjet(t);
    	     			//t1.setIdTache(rs1.getInt(2));
    	     			//t1.setNiveauDifficulte(rs1.getInt(3));
    	     			t1.setResponsable(rs1.getInt(1));
    	     			//t1.setNbJours(rs1.getInt(5));
    	     			//t1.setChecked(rs1.getBoolean(6));
    	     			lesPlanningTasks.add(t1);
    	    		    			
    	    		 }
    	    		 
    			 /***********/
    			 
    			 t.setEmploye( this.getEmploye1(rs.getInt(1),lesPlanningTasks));
    			
    		   
    			/*
                  for(int i=0;i<lesEmployes.size();i++)
                  {
                	  if(rs.getInt(1)==lesEmployes[i].getId())
                	  {
                	  Employe e= lesEmployes[i]
                			  lesNewEmployes.add(e);
                	  }
                  }*/
    			/*
    			t.setLesEmployes(lesNewEmployes);
    			t.setLesTaches(lesPlannignTask);*/
    			
    			 lesProjets.add(t);
    		    			
    		 
    		 
    		 }
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
    	    	 
        	    	 return lesProjets;

    	    	 
         
     } 
     
     public  List<Employe> getEmploye1(int idProj, List<Planning_task> lesPlanningTask) { 
    	 System.out.println("id"+idProj);
    	 List<Employe> lesEmploye=new ArrayList<>();
    	  List<Employe> lesEmplyes=repo.getEmployes();
    	 	
    	// String sql="select * from planning_task where id_projet"+idProj;
    	 try {
    		for(int i=0;i<lesPlanningTask.size();i++)
    		{
    			if(lesPlanningTask.get(i).getIdProjet().getId_projet()==idProj)
    			{
    				System.out.println("id"+lesPlanningTask.get(i).getResponsable());
    				for(int j=0;j<lesEmplyes.size();j++)
    				{
    					//System.out.println("id"+lesEmplyes.get(j));
    					
    					
    					if(lesPlanningTask.get(i).getResponsable()==lesEmplyes.get(j).getId())
    						{
    						System.out.println("id"+lesEmplyes.get(j));
    						lesEmploye.add(lesEmplyes.get(j));
    						}
    				}
    				
    			}
    			
    		}
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return lesEmploye; 
     } 
     

   
     public Projet getProjetById(int id) { 
    
    	 String sql="select * from projet where id_projet="+id;
    	 Projet t=new Projet();
    	 Employe lesNewEmployes=new Employe();
    	 Planning_task lesPlannignTask=new Planning_task();
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 if(rs.next())
    		 {
    			 t.setId_projet(rs.getInt(1));
    			 t.setName(rs.getString(2));
    			 
        		 t.setJour_visite(rs.getDate(3));;
        		 t.setDDB(rs.getDate(4));
        		 t.setDDF(rs.getDate(5));
        		
    			
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return t; 
     } 
   
     
  
     public  void creatProjet(Projet a1 )
     {
    	 System.out.println("test");
    	 String sql="insert into projet values(?,?,?,?,?,?) ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    		
    		st.setInt(1,a1.getId_projet());
    		st.setString(2, a1.getName());
    		
    		/*
    		String sDate1=a1.getJour_visite().toString();  
    	    Date date1=new SimpleDateFormat("dd-MM-yyyy").parse(sDate1); 
    	   */
    		System.out.println(a1.getDDB());
    		st.setDate(3,a1.getJour_visite());
    	
    		st.setDate(4,a1.getDDB());
    		st.setDate(5,a1.getDDF());
    		st.setInt(6,a1.getProgression());
    		
    		st.executeUpdate();
    		
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
     
     
     
     
     
     
     
    
     /*
     public  void creatProjet(Projet a1 )
     {
    
    	 String sql="insert into projet values(?,?,?,?,?,?,?) ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    	
    		
    		
    		st.setId_projet(1,a1.getId_projet());
			st.setName(2,a1.getName());
			st.setJour_visite(3,a1.getJour_visite());;
   		 	st.setDDB(4,a1.getDDB());
   		 	st.setDDF(5,a1.getDDF());
   		 	st.setLesEmployes(6,a1.getLesEmployes());
   		 	st.setLesTaches(7,a1.getLesTaches());
    		st.executeUpdate();
    		
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
    
     
  
    */ 
     public  void updateProjet(Projet a1 )
     {
    	 System.out.println(a1);

    	 String sql="update projet set name=?, jour_visite=?, DDB=?,DDF=? where id_projet=? ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    		
    		
    		st.setInt(5,a1.getId_projet());
    		st.setString(1, a1.getName());
    		
    		st.setDate(2,a1.getJour_visite());
    	
    		st.setDate(3,a1.getDDB());
    		st.setDate(4,a1.getDDF());
    		
    		st.executeUpdate(); 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
     
   
     
     
     
     
     public  void updateProjetProgresion(int idProjet,int progession )
     {
    	 
    	 updateProjetProgresion( idProjet );
    	 String sql="update projet set progression=? where id_projet=? ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    		
    		
    		st.setInt(2,idProjet);
    		st.setInt(1, progession );
    		
    		
    		st.executeUpdate(); 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
     
     public  void updateProjetProgresion(int idProjet )
     {
    	 

    	 String sql="update projet set progression=? where id_projet=? ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    		
    		
    		st.setInt(2,idProjet);
    		st.setInt(1, 0 );
    		
    		
    		st.executeUpdate(); 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
     
     
   
    
     public  void delete(int id )
     {
    
    	 String sql="delete from projet  where id_projet=? ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
 			st.setInt(1, id);
    		st.executeUpdate();
    		
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
   
        
}

