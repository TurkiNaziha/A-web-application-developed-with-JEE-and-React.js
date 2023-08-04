package Avancement.EmployeTest;


import java.util.List;

import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.UriInfo;

@Path("planning_task")
public class Planning_taskResource {
	
	  @Context
	    private UriInfo context;

	    /**
	     * Creates a new instance of TrainResource
	     */
	  Planning_taskBD repo=new Planning_taskBD();
	  
	    public Planning_taskResource() {
	        
	    }
	    
	  

	    
	  /*  
	    @GET
	   @Path("employebyjson")
	  //  @Produces("application/xml")
	    @Produces(MediaType.APPLICATION_XML)
	    public List<Employe> getEmployes() { 
		    System.out.println("getTrains in XML Format"); 
		    return BookEmployeeBD.getEmployes(); 
	    } */
	
	  
	    @GET
	  //  @Path("trainbyjson")
	    @Produces("application/json")
	    public List<Planning_task> getPlanning_task() { 
		    System.out.println("getTrains in json format"); 
		    return repo.getPlanning_taskBD(); 
	    } 
	    
	    
	    
	    @GET
		   @Path("employes/{idProjet}")
		    @Produces("application/json")
		    public List<Employe> getemployes(@PathParam("idProjet") int idProjet) { 
			    System.out.println("getTrains in json format"); 
			    return repo.getEmploye(idProjet); 
		    } 
	    
	    @GET
		   @Path("Paremployes/{idemploye}")
		    @Produces("application/json")
		    public List<Planning_task> getPlaninngParEmployes(@PathParam("idemploye") int idemploye) { 
			    System.out.println("getTrains in json format"); 
			    return repo.getPlanning_taskBDByEmploye(idemploye); 
		    } 
	    
	    @GET
		   @Path("projet/{idProjet}")
		    @Produces("application/json")
		    public List<Planning_task> getPlanningtaskByProjet(@PathParam("idProjet") int idProjet) { 
			    System.out.println("getTrains in json format"); 
			    return repo.getPlanning_taskByIdProjet(idProjet); 
		    } 
	    
	    // terminer pourque ça soit accessible par le path {id}/
	   /* 
	    @GET
	    @Path("{id}")
	    @Produces("application/json")
	    public Employe getEmploye(@PathParam("id") int id) { 
	    	 return repo.getEmployesById(id);
	    	
	    } 
	    
	    
	    // terminer pourque ça soit accessible par le path search
	   // @GET
	    //@Path("search")
	   // @Produces("application/xml")
	    /*
	    @Produces("application/json")
	    public List<Employe> searchEmployesByCriteria(@QueryParam("id") int id, 
	            @QueryParam("fullName") String fullName) { 

	        List<Employe> employes = BookEmployeeBD.getEmployes();
	        List<Employe> result=new ArrayList();
	        for(int i=0; i<employes.size(); i++)
	        if((employes.get(i).getId()==id) && (employes.get(i).getFullName().equals(fullName)))
	            result.add(employes.get(i));
	        return result;
	    }
	    
	    // // terminer pourque ça soit accessible par le path create
	  /*  @POST
	    @Path("create")
	    public void createEmploye(Employe e
	    		/*@QueryParam("id") int id,
	            @QueryParam("fullName") String fullName,
	            @QueryParam("experience") String experience*/
	         //   )
	           // { 
	       // Employe e=new Employe(id,fullName,experience);
	    	//System.out.println("Test de create ");
	    	/*
	    	Employe aa=new Employe(id, fullName, experience);
	        BookEmployeeBD.getEmployes().add(aa);*/
	    	// BookEmployeeBD.creatEmplye(e);
	 	   // }
	    
	    
	        @POST
	        @Path("create")
	         public Planning_task createPlanning_task(Planning_task e )
	         { 
	        	
	       	System.out.println("Test de create "+e.toString());    	
	        repo.creatPlanning_task(e);
	        return e;
	         	    }

	        
	        
	        @PUT
	        @Path("updatetaskProgresion/{idProjet}/{idTache}/{checked}")
	         public void updateEmploye(@PathParam("checked") boolean checked , @PathParam("idProjet") int idProjet, @PathParam("idTache") int idTache )
	         { 
	       	System.out.println("Test de update ");    	
	        repo.updatetaskProgresion(checked, idProjet, idTache);
	      
	         	    }
	        
	        @DELETE
		    @Path("remove/{id}")
		    public void remove(@PathParam("id") int id) 
		    { 
	        	
	        	repo.delete(id);
		    }
	        
	        
	        /*
	        
	        @PUT
	        @Path("update")
	         public Employe updateEmploye(Employe e )
	         { 
	       	System.out.println("Test de update ");    	
	        repo.updateEmplye(e);
	        return e;
	         	    }
	    
	    /*
	    @POST
	    @Path("create2/{id}/{fullName}/{experience}")
	    public void createEmploye2(@PathParam("id") int id,
	            @PathParam("fullName") String fullName,
	            @PathParam("experience") String experience)
	            { 
	        
	    	System.out.println("Test de create ");
	    	Employe aa=new Employe(id, fullName, experience);
	        BookEmployeeBD.getEmployes().add(aa);
	        
	 
	    }
	    // terminer pourque ça soit accessible par le path {id}/remove
	    @DELETE
	    @Path("remove/{id}")
	    public void remove(@PathParam("id") int id) 
	    { 
	        List<Employe> employes = BookEmployeeBD.getEmployes();
	        int k=-1;
	        for(int i=0; i<employes.size(); i++)
	        if(employes.get(i).getId()==id)
	            k=i;
	        if(k>0)
	        	employes.remove(k);
	    }*/
	        
	        /*
	        @DELETE
		    @Path("remove/{id}")
		    public Employe remove(@PathParam("id") int id) 
		    { 
		     Employe e=repo.getEmployesById(id);
		     if(e.getId()!=0)
		    	 repo.delete(id);
		     
		     
		     return e;
		    }    
	        */
	        

}
