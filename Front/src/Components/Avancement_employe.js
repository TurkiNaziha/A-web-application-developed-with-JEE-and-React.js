// import React, { useState, useEffect } from 'react';

// // import  "../styles/Employe.css";
// import  "../styles/Avancement.css";

// import axios from 'axios'



// import { Link } from "react-router-dom";


// export default function Avancement_employe() {
   
      

//     //   useEffect(() => { 
//     //     axios.get("http://localhost:8080/EmployeTest/webapi/employes")
//     //         .then(res => {               
//     //             setData(res.data)
//     //             console.log(res.data)
//     //          })
//     //          .catch(error=>{
//     //              console.log("Error")
//     //          })
//     //   }, [])
//     let data = [1, 2, 3, 4, 5];
//     return(
//         <div className="container1" style={{
//         paddingLeft: "55px", height:"900px"}}>
     
//      <div className="container m-t-20" >
//       <h1 className="page-title">All Notes</h1>
// <div className="allnotes-page"  >
//         <div className="columns is-multiline"  >
//           {data.length > 0
//             ? data.map((item, i) => (
//                 <div className="column is-one-third"   key={i}>
//                   <div className="card"  >
//                     <header className="card-header"  >
//                       <p className="card-header-title"  >Component</p>
//                     </header>
//                     <div className="card-content">
//                       <div className="content"  >
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Phasellus nec iaculis mauris. Lorem ipsum dolor sit
//                         amet.
//                         <br />
//                       </div>
//                     </div>
//                     <footer className="card-footer"  >
//                       <Link to={`note/${i}`} className="card-footer-item"  >
//                         Edit
//                       </Link>
//                       <a href="#" className="card-footer-item"  >
//                         Delete
//                       </a>
//                     </footer>
//                   </div>
//                 </div>
//               ))
//             : "No Notes yet"}
//         </div>
//       </div>
//     </div>
             
//         </div>
//     )
// }



import { Link } from "react-router-dom";
import Card from  './Card'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
const Avancement_employe = () => {
  const [employes, setemployes ]= useState([]);
  const [tasks, settasks ]= useState([]);
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getFullYear()}`;
  const [datee, setdatee ]= useState(date );
  const [idEmplye, setidEmplye ]= useState( );
  useEffect(() => { 
    axios.get("http://localhost:8080/EmployeTest/webapi/employes")
        .then(res => {               
          setemployes(res.data)
            console.log(res.data)
           })
         .catch(error=>{
             console.log("Error")
         })
  }, [])




  function onSelect(val) {
    console.log("rr",val)
 setidEmplye(val)
     
 axios.get("http://localhost:8080/EmployeTest/webapi/planning_task/Paremployes/"+val)
 .then(res => { 
  settasks(res.data)
  console.log(res.data)  
 
    })
  .catch(error=>{
      console.log("Error")
  })
 }

  return (
    <div className="container1" style={{
              paddingLeft: "55px", height:"900px"}}>
                {/* <h1 className="page-title" style={
                  { fontSize: "2rem",
                      marginBottom: "20px"
                    }
                  }
                >{date}</h1> */}

<div style={{ textAlign:"center"}}>
<h1>selected Date: {datee}</h1>
<div style={{display:"flex", marginLeft:"500px"}}>
<select  placeholder='Employe'  onChange={(e) => onSelect(e.target.value) }>
  <option >Filtred by</option>
        {employes.map((cate,index) => (
                <option  key={cate.id} value={cate.id}>{cate.fullName}</option>
            ))}
        </select>
<input  style={{ height:"40px", width:"200px"}}type="date" onChange={e=>setdatee(e.target.value)}/>

        </div>

</div>
{
  
tasks.map(({  idProjet, idTache,checked }) => (
      
      <Card idProjet={idProjet} idTache={idTache} checked={checked}/>
  
))
}
    {/* <Card /> */}
    </div>
  );
}
export default Avancement_employe;