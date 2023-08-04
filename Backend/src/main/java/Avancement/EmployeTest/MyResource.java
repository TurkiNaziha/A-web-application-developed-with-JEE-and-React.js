package Avancement.EmployeTest;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("myresource")
public class MyResource {

    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return "Got it!";
    }
    
    
    @Path("/test")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
     public String affichage() {
        return "sfax";
    }
    @GET
    @Path("tp2/{v}")
    @Produces(MediaType.TEXT_PLAIN)
    public String affichage2(@PathParam("v") String ville) {
        return "bonjour "+ville;
    }
    @GET
    @Path("tp3")
    @Produces(MediaType.TEXT_PLAIN)
    public String affichage3(@QueryParam("x") String ville1) {
        return "bonjour "+ville1;
        //http://localhost:8080/sfax/webapi/myresource/tp3?x=Gabes
    }
}
