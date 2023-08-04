import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
import  "../styles/Employe.css";
import Idid from './Idid'
import axios from 'axios'
import { AlternateEmail } from '@material-ui/icons';




export default function Employe() {
    const [id,setID]=useState("")
    const [fullName,setFullName]=useState("")
    const [experience,setexperience]=useState("")
    const [data, setData] = useState([]); 


  function setoptio(val){
      alert(val);
      setexperience(val);
        }


    const handilesave=(event)=>{

        const emp={
            id:id,
            fullName:fullName,
            experience:experience,
        
        }
    
        let errorList = []
        if(id === ""){
          errorList.push("Please enter id")
        }
        if(fullName=== ""){
          errorList.push("Please enter fullname")
        }
     
        if( experience=== ""){
            errorList.push("Please choice an option")
           
          }
     
        if(errorList.length < 1){ //no error
                axios.post("http://localhost:8080/EmployeTest/webapi/employes/create", emp)
          .then(res => {
            let dataToAdd = [...data];
            dataToAdd.push(emp);
            setData(dataToAdd);
            // alert(`hhh`)
            // resolve()
            // setErrorMessages([])
            // setIserror(false)*
        
            axios.get("http://localhost:8080/EmployeTest/webapi/employes")
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
      

      useEffect(() => { 
        axios.get("http://localhost:8080/EmployeTest/webapi/employes")
            .then(res => {               
                setData(res.data)
                console.log(res.data)
             })
             .catch(error=>{
                 console.log("Error")
             })
      }, [])

    return(
        <div className="container1" style={{
        paddingLeft: "55px"}}>
            <header>Employe</header>
             <form  onSubmit={handilesave}>
                <div className="form first">
                    <div className="details personal">
                        <span className="title">details personnelle</span>
                        <div className="fields">
                            <div className="input-field" >
                                <label>ID</label>
                                <input type="number" placeholder="Enter your ID" required
                                 value={id}
                                 onChange={e=>setID(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <label>Full Name</label>
                                <input type="Text" placeholder="Enter your Full Name" required
                                 value={fullName}
                                 onChange={e=>setFullName(e.target.value)}/>
                            </div>

                            {/* <div className="input-field">
                                <label>Date</label>
                                <input type="date" placeholder="Enter your date" required/>
                            </div> */}

                            <div className="input-field">
                                <label >Experience</label>
                                <select style={{margintop:"20px"}} placeholder="Choice an option" value={experience}
                                 onChange={e=>setoptio(e.target.value)}>
                                    <option>choice an option</option>
                                    <option>Débutant</option>
                                    <option>Expert</option>
                                </select>
                            </div>


                        </div>
                        <button className="nextBtn" type="submit">
                            <span className="btnText">ADD</span>
                            <i className="uil uil-vigator"></i>
                        </button>
                    </div>

                </div>



             </form>
        
             <Idid data={data} setData={setData}/>
             
        </div>
    )
}