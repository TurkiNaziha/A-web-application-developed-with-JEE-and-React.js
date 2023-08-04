import {
    Button, Dialog,DialogTitle,DialogContent,DialogContentText, DialogActions} from '@mui/material'
    import React, { useState, useEffect } from 'react';
    import { format } from 'date-fns'
import Tachemangement from './Tachemangement';
import ListTache from './ListTache';
import axios from 'axios'
// employes, setemployes ,
    export default function TableDymique({ selectedRow,targetKeys,setTargetKeys }) {
        const [open, setOpen]=useState(false)
        const [projet, setprojet] = useState([]);
        const [ratings, setratings] = useState([]);
        const [idProjet, setidProjet] = useState(selectedRow);
        const [idTache, setidTache] = useState(0);
        const [niveauDifficulte, setniveauDifficulte] = useState(0);
        const [nbJours, setnbJours] = useState(0);
        const [responsable, setresponsable] = useState(0);
        const [DDF, setDDF] = useState(new Date());
        let nb=0;

        // useEffect(() => { 
        //   axios.get("http://localhost:8080/EmployeTest/webapi/projet")
        //       .then(res => {               
        //         setprojet(res.data)
        //           console.log(res.data)
        //           for(let i=0;res.data.length;i++)
        //           {
        //                   if(res.data[i].id==idProject)
        //                   setid_Projet(res.data[i])
        //                   console.log(res.data[i])

        //           }
        //        })
        //        .catch(error=>{
        //            console.log("Error")
        //        })
        // }, [])






       function genereDDl(val,nb)
       {
            console.log(val)
          

            // var result = new Date(val);
            // result.setDate(result.getDate() + nb);
            // console.log( result.toDateString())
            let newnb=1+ parseInt(nb)
            var d1 = new Date("02-2");
            var d2= new Date("");
            for(let i=1;i<nb+1;i++)
            {
                var result = new Date(val);
                result.setDate(result.getDate() + i);
                if((result.getDay() === 6) || (result.getDay()  === 0)||(result.getDate()===d1.getDate()))
                {
                    newnb+= 1
                console.log(  result.toDateString())  
                }

            }
            console.log(  newnb)
               var DDL = new Date(val);
             DDL.setDate(DDL.getDate() + newnb);
             setDDF(DDL.toLocaleDateString("es-CL"))
             console.log( DDL.toLocaleDateString("es-CL"))
             console.log( selectedRow.id_projet)
             const proj={
               DDF:format(DDL, 'yyyy-MM-dd'),
               id_projet:selectedRow.id_projet,
               ddb:selectedRow.DDB,
               name:selectedRow.name,
               jour_visite:selectedRow.jour_visite,
              }
              axios.put("http://localhost:8080/EmployeTest/webapi/projet/update", proj)
              .then(res => {
                console.log( proj)
              })
              .catch(error => {
                console.log( error)
                 
              })
            
       }










        function test(){
            setOpen(false);
            console.log(selectedRow)
           console.log(ratings)
//methode save
console.error("bilel ",     ratings)
console.log(ratings.length)
axios.delete("http://localhost:8080/EmployeTest/webapi/planning_task/remove/"+idProjet.id_projet)
.then(res => {
 
})
.catch(error => {
  console.log(error)
})
for(let i=0;i<ratings.length;i++)
{
    // setidTache(ratings[i].key)
    // setniveauDifficulte(ratings[i].ND)
    // setnbJours(ratings[i].jours)
    // setresponsable(ratings[i].Responsable)
    nb+=parseInt(ratings[i].nbJours)
const Planning_task={
   idProjet:{"id_projet": idProjet.id_projet, "name": idProjet.name, "jour_visite": idProjet.jour_visite, "DDB": idProjet.DDB, "DDF": idProjet.DDF, "ddb": idProjet.ddb},
   
    idTache:ratings[i].idTache,
    niveauDifficulte:ratings[i].niveauDifficulte,
    nbJours:ratings[i].nbJours,
    responsable:ratings[i].responsable
    // idTache:idTache,
    // niveauDifficulte:niveauDifficulte,
    // nbJours:nbJours,
    // responsable:responsable

}

let errorList = []
// if(Planning_task.id === ""){
//   errorList.push("Please enter id")
// }
// if(newData.fullName=== ""){
//   errorList.push("Please enter fullname")
// }


if(errorList.length < 1){ //no error
   
     //Planning_task.idProjet.tableData.id = 55;
     console.error("mozz", Planning_task.idProjet.idProjet )
 // api.post("/users", newData)
  axios.post("http://localhost:8080/EmployeTest/webapi/planning_task/create",Planning_task)
  .then(res => {
   
  })
  .catch(error => {
    console.log(error)
  })
}else{
    console.log(errorList)

}

}


console.log(nb)
genereDDl(idProjet.DDB,nb)


        }



        return(
        <div>
        <Button style={{    marginLeft: "0px",
    width: "100px",
    marginRight: "0px"}} onClick={()=> setOpen(true)}>Apply</Button>
        <Dialog
        style={{}}
        open={open}
        onClose={()=> setOpen(false)}
        aria-labelledBy='title'
        aria-describedly='descripti'>
            <DialogTitle id='tit'>Prepare your Planning!</DialogTitle>
            <DialogContent>
                {/* <DialogContentText id='desc'>u can do it</DialogContentText> */}
                {/* employes={employes} */}
               <ListTache  targetKeys={targetKeys}  selectedRow ={ selectedRow} ratings={ratings} setratings={ setratings}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> setOpen(false)}>Cancel</Button>
                <Button autoFocus onClick={()=> test()}>Apply</Button>
            </DialogActions>
        </Dialog>
       </div>
       )

    }