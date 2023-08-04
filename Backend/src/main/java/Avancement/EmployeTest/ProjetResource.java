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

@Path("projet")
public class ProjetResource {
	
	  @Context
	    private UriInfo context;

	    /**
	     * Creates a new instance of TrainResource
	     */
	  ProjetBD repo=new ProjetBD();
	  
	    public ProjetResource() {
	        
	    }
	    
	  

	    
	
	   
	    @GET
	  //  @Path("trainbyjson")
	    @Produces("application/json")
	    public List<Projet> getTaches() { 
		    System.out.println("getTaches in json format"); 
		    return repo.getProjet(); 
	    } 
	    
	    
	    
	    // terminer pourque ça soit accessible par le path {id}/
	    
	    @GET
	    @Path("{id}")
	    @Produces("application/json")
	    public Projet getProjet(@PathParam("id") int id) { 
	    	 return repo.getProjetById(id);
	    	
	    } 
	    
	    
	    @GET
	    @Path("getWithEmployes")
	    @Produces("application/json")
	    public List<Projet> getProjet() { 
	    	 return repo.getProjetWithEmployes();
	    	
	    } 
	 
	    
	 
	  
	    
	        @POST
	        @Path("create")
	         public Projet create(Projet t )
	         { 
	       	System.out.println("Test de create ");    	
	        repo.creatProjet(t);
	        return t;
	         	    }

	        
	        @PUT
	        @Path("update")
	         public Projet updateTache(Projet t )
	         { 
	       	System.out.println("Test de update ");    	
	        repo.updateProjet(t);
	        return t;
	         	    }
	        
	        
	        
	        @PUT
	        @Path("updateProgression/{idProjet}/{progession}")
	         public void updateprogression(@PathParam("idProjet") int idProjet, @PathParam("progession")int progession )
	         { 
	       	System.out.println("Test de update ");    	
	        repo.updateProjetProgresion(idProjet, progession);;
	       
	         	    }
	    
	  
	         
	        @DELETE
		    @Path("remove/{id}")
		    public Projet remove(@PathParam("id") int id) 
		    { 
		     Projet e=repo.getProjetById(id);
		     
		   //  if(!e.getDescription().equals(""))
		    	// repo.delete(id);
		    // if(e.getNiveauDifficulte()!=0)
		     if(e.getId_projet()!=0)
		    	 repo.delete(id);
		     
		     return e;
		    }     
	    

}
