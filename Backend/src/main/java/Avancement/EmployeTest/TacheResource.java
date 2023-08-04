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

@Path("taches")
public class TacheResource {
	
	  @Context
	    private UriInfo context;

	    /**
	     * Creates a new instance of TrainResource
	     */
	  TacheBD repo=new TacheBD();
	  
	    public TacheResource() {
	        
	    }
	    
	  

	    
	
	   
	    @GET
	  //  @Path("trainbyjson")
	    @Produces("application/json")
	    public List<Tache> getTaches() { 
		    System.out.println("getTaches in json format"); 
		    return repo.getTaches(); 
	    } 
	    
	    
	    
	    // terminer pourque ça soit accessible par le path {id}/
	    
	    @GET
	    @Path("{id}")
	    @Produces("application/json")
	    public Tache getTache(@PathParam("id") int id) { 
	    	 return repo.getTacheById(id);
	    	
	    } 
	    
	 
	    
	 
	  
	    
	        @POST
	        @Path("create")
	         public Tache create(Tache t )
	         { 
	       	System.out.println("Test de create ");    	
	        repo.creattache(t);
	        return t;
	         	    }

	       
	        @PUT
	        @Path("update")
	         public Tache updateTache(Tache t )
	         { 
	       	System.out.println("Test de update ");    	
	        repo.updateTache(t);
	        return t;
	         	    }
	    
	  
	      
	        @DELETE
		    @Path("remove/{id}")
		    public Tache remove(@PathParam("id") int id) 
		    { 
		     Tache e=repo.getTacheById(id);
		     System.out.print(e.getDescription().toString());
		   //  if(!e.getDescription().equals(""))
		    	// repo.delete(id);
		    // if(e.getNiveauDifficulte()!=0)
		     if(e.getId()!=0)
		    	 repo.delete(id);
		     
		     return e;
		    }     
	       

}
