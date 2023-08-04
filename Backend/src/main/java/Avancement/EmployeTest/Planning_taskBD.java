package Avancement.EmployeTest;



import java.util.ArrayList;
import java.util.List;
import java.sql.*;


public class Planning_taskBD {
	 Connection con=null;
	public Planning_taskBD()
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
	 
	  //TacheBD repo1=new TacheBD();
	  ProjetBD repo2=new ProjetBD();
	 // List<Employe> lesEmplyes=repo.getEmployes();
	 //	 List<Tache> Tasks=repo1.getTaches();
	 	 List<Projet> lesProjets=repo2.getProjet();
	  
	 	 
	 	 
	 	 
     public  List<Planning_task> getPlanning_taskBD() { 
    	 List<Planning_task> lesPlanningTasks=new ArrayList<>();
    	
    	//  List<Employe> lesEmplyes=repo.getEmployes();
    	 	// List<Tache> Tasks=repo1.getTaches();
    	 	 List<Projet> lesProjets=repo2.getProjet();
    	 String sql="select * from planning_task";
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 while(rs.next())
    		 {
    			 Planning_task t=new Planning_task();
    			 Employe e=new Employe();
    			 Tache tch=new Tache();
    			 Projet p=new Projet();
    			
    			 
    			 for(int i=0;i<lesProjets.size();i++)
    			 {
    				 
    				 if(lesProjets.get(i).getId_projet()==rs.getInt(1))
    					 p=lesProjets.get(i);
    					 
    			 }
    			 t.setIdProjet(p);
     			t.setIdTache(rs.getInt(2));
     			t.setNiveauDifficulte(rs.getInt(3));
     			t.setResponsable(rs.getInt(4));
     			t.setNbJours(rs.getInt(5));
     			t.setChecked(rs.getBoolean(6));
     			lesPlanningTasks.add(t);
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return lesPlanningTasks; 
     } 
     
     
     
     
     
     
     
     
     
     
     
     
     public  List<Planning_task> getPlanning_taskBDByEmploye(int idEmploye) { 
    	 List<Planning_task> lesPlanningTasks=new ArrayList<>();
    	
    	//  List<Employe> lesEmplyes=repo.getEmployes();
    	 	// List<Tache> Tasks=repo1.getTaches();
    	 	 List<Projet> lesProjets=repo2.getProjet();
    	 String sql="select * from planning_task where id_responsable="+idEmploye;
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 while(rs.next())
    		 {
    			 Planning_task t=new Planning_task();
    			 Employe e=new Employe();
    			 Tache tch=new Tache();
    			 Projet p=new Projet();
    			
    			 
    			 for(int i=0;i<lesProjets.size();i++)
    			 {
    				 
    				 if(lesProjets.get(i).getId_projet()==rs.getInt(1))
    					 p=lesProjets.get(i);
    					 
    			 }
    			 t.setIdProjet(p);
     			t.setIdTache(rs.getInt(2));
     			t.setNiveauDifficulte(rs.getInt(3));
     			t.setResponsable(rs.getInt(4));
     			t.setNbJours(rs.getInt(5));
     			t.setChecked(rs.getBoolean(6));
     			lesPlanningTasks.add(t);
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return lesPlanningTasks; 
     } 
     
     
     
     
     
     
     
     
     
     public  List<Planning_task> getPlanning_taskBDByProjetId(int idProjet) { 
    	 List<Planning_task> lesPlanningTasks=new ArrayList<>();
    	
    	//  List<Employe> lesEmplyes=repo.getEmployes();
    	 	// List<Tache> Tasks=repo1.getTaches();
    	 	 //List<Projet> lesProjets=repo2.getProjet();
    	 String sql="select * from planning_task where id_projet = " + idProjet;
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 while(rs.next())
    		 {
    			 Planning_task t=new Planning_task();
    			 Employe e=new Employe();
    			 Tache tch=new Tache();
    			 Projet p=new Projet();
    			
    			 
    			 for(int i=0;i<lesProjets.size();i++)
    			 {
    				 
    				 if(lesProjets.get(i).getId_projet()==rs.getInt(1))
    					 p=lesProjets.get(i);
    					 
    			 }
    			 t.setIdProjet(p);
     			t.setIdTache(rs.getInt(2));
     			t.setNiveauDifficulte(rs.getInt(3));
     			t.setResponsable(rs.getInt(4));
     			t.setNbJours(rs.getInt(5));
     			t.setChecked(rs.getBoolean(6));
     			lesPlanningTasks.add(t);
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return lesPlanningTasks; 
     } 
     
     
     
     
     
     
     
     
     public  List<Planning_task> getPlanning_taskByIdProjet(int idprojet) { 
    	 List<Planning_task> lesPlanningTasks=new ArrayList<>();
    	
    	 
    	 	 List<Projet> lesProjets=repo2.getProjet();
    	 String sql="select * from planning_task where id_projet="+idprojet;
    	 try {
    		
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 while(rs.next())
    		 {
    			 Planning_task t=new Planning_task();
    			
    			 Projet p=new Projet();
    		
    			 
    			 for(int i=0;i<lesProjets.size();i++)
    			 {
    				 
    				 if(lesProjets.get(i).getId_projet()==rs.getInt(1))
    					 p=lesProjets.get(i);
    					 
    			 }
    			 t.setIdProjet(p);
     			t.setIdTache(rs.getInt(2));
     			t.setNiveauDifficulte(rs.getInt(3));
     			t.setResponsable(rs.getInt(4));
     			t.setNbJours(rs.getInt(5));
     			t.setChecked(rs.getBoolean(6));
     			lesPlanningTasks.add(t);
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return lesPlanningTasks; 
     }
     
     
     
     
     
     public  List<Employe> getEmploye(int idProj) { 
    	 System.out.println("id"+idProj);
    	 List<Employe> lesEmploye=new ArrayList<>();
    	List<Planning_task> lesPlanningTask= getPlanning_taskBD();
    	  List<Employe> lesEmplyes=repo.getEmployes();
    	 	
    	 	 //List<Projet> lesProjets=repo2.getProjet();
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
     
     
         
     
     
     
     
     
     
     

	 	 /*
     public  List<Planning_task>  getTacheById(int id_projet) { 
    
    	 String sql="select * from planning_task where planning_task.id_projet="+id_projet;
    	 Planning_task p=new Planning_task();
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 if(rs.next())
    		 {
    			 p.setIdProjet(p);
      			p.setIdTache(tch);
      			p.setNiveauDifficulte(rs.getInt(3));
      			p.setResponsable(e);
      			p.setNbJours(rs.getInt(5));
      			lesPlanningTasks.add(t);
    			
    		
    			
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return n; 
     } */
   
     
     /*
     public  Tache getTacheById2(int id) { 
    	    
    	 String sql="select * from tache where niveauDifficulte="+id;
    	 Tache t=new Tache();
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 if(rs.next())
    		 {
    			 
    			 t.setNiveauDifficulte(rs.getInt(2));
    			 t.setDescription(rs.getString(1));
    		
    			
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return t; 
     } 
     
    */
     
     
     
     public  void creatPlanning_task(Planning_task a1 )
     {
    	 System.out.print("teeeeeeeeeeeeeeest");
    	 System.out.println(a1);
    	 Projet p=new Projet();
     	
		 for(int i=0;i<lesProjets.size();i++)
		 {
			 
			 if(lesProjets.get(i).getId_projet()==a1.getIdProjet().getId_projet())
				 p=lesProjets.get(i);
				 
		 } 
		
		 //delete(p.getId_projet());
    	 String sql="insert into planning_task values(?,?,?,?,?, ?) ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    		
    		 Planning_task t=new Planning_task();
    		 /*
    		 Projet p=new Projet();
    	
			 for(int i=0;i<lesProjets.size();i++)
			 {
				 
				 if(lesProjets.get(i).getId_projet()==a1.getIdProjet().getId_projet())
					 p=lesProjets.get(i);
					 
			 } 
			
			 delete(p.getId_projet());*/
    		
    		
    		
    		st.setInt(1, p.getId_projet());
    	//	st.setInt(2, tch.getId());
    		//st.setInt(1, a1.getIdProjet());
    	   st.setInt(2, a1.getIdTache());
    		st.setInt(3, a1.getNiveauDifficulte());
    		//st.setInt(4, e.getId());
    		st.setInt(4, a1.getResponsable());
    		st.setInt(5, a1.getNbJours());
    		st.setBoolean(6, false);
    		
    		
    		st.executeUpdate();
    		
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
    
     
     
     
     
     public  void updatetaskProgresion(boolean checked ,int idProjet, int idTache )
     {
    	 

    	 String sql="update planning_task set checked=? where id_projet=? and id_Tache=? ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    		
    		
    		st.setInt(2,idProjet);
    		st.setInt(3,idTache);
    		st.setBoolean(1, checked );
    		/*
    		if(checked==1)
    		st.setBoolean(1, true );
    		if(checked==0)
        	st.setBoolean(1, false );*/
    		
    		
    		
    		st.executeUpdate(); 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
     
    /* 
     public  void updatePlanning_task(Planning_task a1 )
     {
    
    	 String sql="update planning_task set niveauDifficulte=?,id_responsable=?, nombre_JOURS=?"
    	 		+ " id_projet=? && id_Tache=? ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    		
    		
    		 Planning_task t=new Planning_task();
			 Employe e=new Employe();
			 Tache tch=new Tache();
			 Projet p=new Projet();
			 for(int i=0;i<lesEmplyes.size();i++)
			 {
				 
				 if(lesEmplyes.get(i).getId()==a1.getResponsable().getId())
					 e=lesEmplyes.get(i);
					 
			 }
			 
			 for(int i=0;i<Tasks.size();i++)
			 {
				 
				 if(Tasks.get(i).getId()==a1.getIdTache().getId())
					 tch=Tasks.get(i);
					 
			 }
			 
			 for(int i=0;i<lesProjets.size();i++)
			 {
				 
				 if(lesProjets.get(i).getId_projet()==a1.getIdProjet().getId_projet())
					 p=lesProjets.get(i);
					 
			 }
			
    		
    		
    		
    		
    		st.setInt(4, p.getId_projet());
    		st.setInt(5, tch.getId());
    		st.setInt(1, a1.getNiveauDifficulte());
    		st.setInt(2, e.getId());
    		st.setInt(3, a1.getNbJours());;
    		
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }*/
     
   
    
    
     public  void delete(int idprojet )
     {
    System.out.println("method delete"+idprojet);
    	 String sql="delete from planning_task  where id_projet= "+idprojet;
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
 			//st.setInt(1, idprojet);
    		st.executeUpdate();
    		
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println("errror" + e);
    	 }
	         
     }
     
     
}
 


