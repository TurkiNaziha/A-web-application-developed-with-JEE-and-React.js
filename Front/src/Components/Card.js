
import  "../styles/Card.css";
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import done from '../icons/accept.png'
import inProgress from '../icons/checked.png'
export default function Card ({idProjet,idTache,checked}){
    const [Projetname, setProjetname ]= useState([]);
    const [taskname, settaskname ]= useState("");
    const [tasks, settasks ]= useState([]);
    const [Projets, setProjets ]= useState([]);

    useEffect(() => { 
        axios.get("http://localhost:8080/EmployeTest/webapi/taches")
            .then(res => {               
                 settasks(res.data)
                console.log(res.data)
                //  console.log(data.length)
             
                   
             })
             .catch(error=>{
                 console.log("Error")
             })
      }, [])


      useEffect(() => { 
        axios.get("http://localhost:8080/EmployeTest/webapi/projet")
            .then(res => {               
                setProjets(res.data)
                console.log(res.data)
             })
             .catch(error=>{
                 console.log("Error")
             })
      }, [])
    




      function trouveDescriptioTask(){
        let s=""
         console.log(idTache)
         console.log("cc",checked)
         for(let i=0;i<tasks.length;i++)
         {
           
           // console.log(tasks[i].id)
           if(tasks[i].id==idTache )
           {
          
           s=tasks[i].description
           // console.log(s)
           }
         }
        
         // console.log(item)
         return(
           <p>Task name: {s}</p>
         )
       
       
       }


       function etat(){
      if(checked==true)
      return(
        <img src={done}  />
        
      )
      if(checked==false)
      return(
        <img src={inProgress}  />
       
      )
       
       
       }
  



    return(
        <div className="card-content">
<div className="card-container">

<div className="card-title">

<h3>Task </h3>

</div>

<div className="card-body">

<p>{trouveDescriptioTask()}</p>

</div>

<div className="card-body">

<p>Projet name:{idProjet.name}</p>

</div>



<div className="btn">
{etat}
{/* <button>rr</button> */}

</div>

</div>
</div>

    )
}
