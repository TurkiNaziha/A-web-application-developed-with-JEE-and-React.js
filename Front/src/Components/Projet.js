import React, { useState, useEffect } from 'react';
import axios from 'axios'
import  "../styles/Plan.css";
import Multiselect from 'multiselect-react-dropdown';
import Tachemangement from "./Tachemangement";
import ProjetTable from "./ProjetTable"
import {
    Button, Dialog,DialogTitle,DialogContent,DialogContentText, DialogActions} from '@mui/material'
import DialogTache from "./DialogTache";
import DialogPlans from "./DialogPlans";



export default function Projet() {
   
   const [open, setOpen]=useState(false);
    const [selected, setSelected] = useState([]);
    const [data, setData] = useState([]);
    const [options, setoptions] = useState([]);
   const [name, setname] = useState("");
   const [jour_visite, setjour_visite] = useState(new Date())
   const [ddb, setddb] = useState(new Date());
   const [listTache, setListTache] = useState([]);
   const [employes, setemployes] = useState([]);



   useEffect(() => { 
    axios.get("http://localhost:8080/EmployeTest/webapi/projet")
        .then(res => {               
            setData(res.data)
            console.log(res.data)
         })
         .catch(error=>{
             console.log("Error")
         })
  }, [])





    useEffect(() => { 
        axios.get("http://localhost:8080/EmployeTest/webapi/employes")
            .then(res => {    
                setoptions(res.data)           
               //setdata(res.data)
                // console.log(res.data)
                // let dataToAdd = [...data];
                // dataToAdd.push(res.data);
                // setdata(dataToAdd);
               // console.log(res.data[1].fullName)
               
             //   let opToAdd = [...options];
            //     for(let i=0;i<res.data.length;i++)
            //     {
            //         options.push(res.data[i].fullName);
            //        // console.log(res.data[i].fullName)
            //     }
            //     // data.forEach(element => {
            //     //     opToAdd.push(element.fullName);
            //     //     console.log(element.fullName)
                   
                    
            //     // });
            //   //  setoptions(opToAdd);
            //     console.log(options)
             })
             .catch(error=>{
                 console.log("Error")
             })
      }, [])

    function onSelect(selectedList, selectedItem) {
        console.log(selectedList)
                setemployes(selectedList)
    }

function onRemove(selectedList, removedItem) {
    setemployes(selectedList)
}





const handilesave=(event)=>{
   
    const proj={
      ddb:ddb,
        name:name,
        jour_visite:jour_visite,
       
    
    }
    console.log(proj)
    let errorList = []
    if(name === ""){
      errorList.push("Please enter name")
    }
    if( jour_visite=== ""){
      errorList.push("Please enter  jour de visite")
    }
 
    if(  ddb=== ""){
        errorList.push("Please choice a date")
       
      }
      if(  ddb>jour_visite){
        errorList.push("date is not valid!")
        alert("date is not valid!")
        setddb(new Date())
        setjour_visite(new Date())
       
      }
 
    if(errorList.length < 1){ //no error
      console.log(proj.ddb)
            axios.post("http://localhost:8080/EmployeTest/webapi/projet/create", proj)
      .then(res => {
        let dataToAdd = [...data];
        dataToAdd.push(proj);
        setData(dataToAdd);
        console.log(proj)
        setddb(new Date())
        setjour_visite(new Date())
        setname("")
   
    
        axios.get("http://localhost:8080/EmployeTest/webapi/projet")
    .then(res => {               
        setData(res.data)
        console.log(res.data)
     })
     .catch(error=>{
         console.log("Error")
     })
      })
      .catch(error => {
        // setErrorMessages(["Cannot add data. Server error!"])
        // setIserror(true)
        // resolve()
      })
    }else{
    //   setErrorMessages(errorList)
    //   setIserror(true)
    //   resolve()
    //alert("Please choice an option")
    }
  
    
     event.preventDefault();

  }








    return (
      <div className="container2" style={{
        paddingLeft: "55px",
        height: "963px"}}>
            <header>Projets</header>
            <form  onSubmit={handilesave}>
                <div className="form first" style={{
    height: "270px"
}}>
                    <div className="details personal">
                        <span className="title"></span>
                        <div className="fields">
                        <div className="fields">


                            <div className="input-field" >
                                <label>Project Name</label>
                                <input type="Text" placeholder="Enter Project Name" required
                                  value={name}
                                  onChange={e=>setname(e.target.value)}
                                />
                            </div>

                            <div className="input-field">
                                <label>Jour de visite</label>
                                <input type="date" placeholder="Jour de visite" required
                                  value={jour_visite}
                                  onChange={e=>setjour_visite(e.target.value)}
                                />
                               
                            </div>

                           

                             <div className="input-field">
                                <label>Date de debut</label>
                                <input type="date" placeholder="Enter your date" required
                                    value={ddb}
                                    onChange={e=>setddb(e.target.value)}/>
                            </div>

                           
                            
                            
                            {/* <div className="input-field" >
                                    <label>Employe</label> 
                                    <Multiselect
                                    options={options} // Options to display in the dropdown
                                //   selectedValues={options} // Preselected value to persist in dropdown
                                   onSelect={onSelect} // Function will trigger on select event
                                   onRemove={onRemove} // Function will trigger on remove event
                                    displayValue="fullName" // Property name to display in the dropdown options
/>

                         
                               </div> */}



                               {/* <div className="">
                                
                                <DialogTache  employes={employes} setemployes={setemployes} />
                            </div>
                         */}

                            {/* <div className="">
                                
                                <DialogPlans/>
                            </div> */}
                            
                         
                         

                      
                   


                      
                       

                     


                         

                         

                            
                        

                           

                

                      

                          

                         

                    


                        <button className="nextBtn">
                            <span className="btnText">ADD</span>
                            <i className="uil uil-vigator"></i>
                        </button>
                    </div>
                         
                </div>
 </div>
                </div>

             </form>
        
             <ProjetTable data={data} setData={setData}/>

             







        
             {/* <Idid /> */}
             
        </div>
      )
}