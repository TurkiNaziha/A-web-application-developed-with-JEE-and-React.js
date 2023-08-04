package Avancement.EmployeTest;

import java.util.ArrayList;
import java.util.List;
import java.sql.*;


public class BookEmployeeBD {
	 Connection con=null;
	public BookEmployeeBD()
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

     
     public  List<Employe> getEmployes() { 
    	 List<Employe> employes=new ArrayList<>();
    	 String sql="select * from employe";
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 while(rs.next())
    		 {
    			 Employe a=new Employe();
    			 a.setId(rs.getInt(1));
    			 a.setFullName(rs.getString(2));
    			 a.setExperience(rs.getString(3));
    			 employes.add(a);
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return employes; 
     } 
     
     
     public  Employe getEmployesById(int id) { 
    
    	 String sql="select * from employe where id="+id;
    	 Employe a=new Employe();
    	 try {
    		 Statement st=con.createStatement();
    		 ResultSet rs=st.executeQuery(sql);
    		 if(rs.next())
    		 {
    			 
    			 a.setId(rs.getInt(1));
    			 a.setFullName(rs.getString(2));
    			 a.setExperience(rs.getString(3));
    			
    		    			
    		 }
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
         return a; 
     } 
   
     
     
     public  void creatEmplye(Employe a1 )
     {
    
    	 String sql="insert into employe values(?,?,?) ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    		st.setInt(1, a1.getId());
    		st.setString(2, a1.getFullName());
    		st.setString(3,a1.getExperience());
    		st.executeUpdate();
    		
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
     
     public  void updateEmplye(Employe a1 )
     {
    
    	 String sql="update employe set fullName=?, experience=? where id=? ";
    	 try {
    		PreparedStatement st=con.prepareStatement(sql);
    		
    		st.setString(1, a1.getFullName());
    		st.setString(2,a1.getExperience());
    		st.setInt(3, a1.getId());
    		st.executeUpdate();
    		
    		 
    	 }
    	 catch(Exception e) {
    		 
    		 System.out.println(e);
    	 }
	         
     }
     
   
    
     
     public  void delete(int id )
     {
    
    	 String sql="delete from employe  where id=? ";
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
