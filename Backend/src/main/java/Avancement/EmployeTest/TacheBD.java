package Avancement.EmployeTest;

import java.util.ArrayList;
import java.util.List;
import java.sql.*;


public class TacheBD {
	 Connection con=null;
	public TacheBD()
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

     
     public  List<Tache> getTaches() { 
    	 List<Tache> taches=new ArrayList<>();
    	 String sql="select * from tache";
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 while(rs.next())
    		 {
    			 Tache t=new Tache();
    			
    			
    			t.setId(rs.getInt(1));
    			t.setDescription(rs.getString(2));
    			taches.add(t);
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return taches; 
     } 
     
     
   
     public  Tache getTacheById(int id) { 
    
    	 String sql="select * from tache where id="+id;
    	 Tache t=new Tache();
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 if(rs.next())
    		 {
    			 
    			 t.setId(rs.getInt(1));
    			 t.setDescription(rs.getString(2));
    		
    			
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return t; 
     } 
   
     
  
    
     
     
     
     
     public  void creattache(Tache a1 )
     {
    
    	 String sql="insert into tache values(?,?) ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    		st.setInt(1, a1.getId());
    		st.setString(2, a1.getDescription());
    		
    		st.executeUpdate();
    		
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
   
     public  void updateTache(Tache a1 )
     {
    
    	 String sql="update tache set description=? where id=? ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    		
    		
    		st.setInt(2, a1.getId());
    		st.setString(1, a1.getDescription());
    		st.executeUpdate();
    		
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
     
   
    
    
     public  void delete(int id )
     {
    
    	 String sql="delete from tache  where id=? ";
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
