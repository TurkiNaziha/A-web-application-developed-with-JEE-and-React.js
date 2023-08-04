import { ListItemSecondaryAction } from '@material-ui/core';
import {
    Button, Dialog,DialogTitle,DialogContent,DialogContentText, DialogActions} from '@mui/material'
    import React, { useState } from "react";
    import Planmanegement from './Planmanegement';
    import ListToDo from './ListToDo'
    import axios from 'axios'
    export default function DialogPlans({rowData,now,setnow, options, setoptions}) {
        const [TablePourceage, setTablePourceage] = useState([]);
        const [open, setOpen]=useState(false)
        // const [somme, setsomme]=useState(0)
      

function test()
{
    // setsomme(0)
    console.log(TablePourceage)
    
    let s=0;
    for(let i=0;i<TablePourceage.length;i++)
    {
        if(TablePourceage[i].checked==true)
        {
            axios.put("http://localhost:8080/EmployeTest/webapi/planning_task/updatetaskProgresion/"+TablePourceage[i].id_projet+"/"+TablePourceage[i].idTache+"/"+true)
            .then(res => {   
             s+=parseInt(TablePourceage[i].poucetage)
             console.log(s)
             axios.put("http://localhost:8080/EmployeTest/webapi/projet/updateProgression/"+rowData.id_projet+"/"+s)
             .then(res => {  
                 // setnow(0)             
             setnow(s)
             
              
              })
              .catch(error=>{
                  console.log("Error")
              })



        })
             .catch(error=>{
                 console.log("Error")
             })
      
        }
        else{
            // s-= parseInt(TablePourceage[i].poucetage)
            axios.put("http://localhost:8080/EmployeTest/webapi/planning_task/updatetaskProgresion/"+TablePourceage[i].id_projet+"/"+TablePourceage[i].idTache+"/"+false)
            .then(res => {   
             
        
        })
             .catch(error=>{
                 console.log("Error")
             })
        }
       

    }
// let somme=0
// // parti pour chager le poucetage de de barre
//     for(let j=0;j<options.length;j++)
//     {
//             if(options[j].checked==true)
//             {
//                     console.log("i did")
//                     console.log(options[j].id_projet)
//                 for(let k=0;k<TablePourceage.length;k++)
//                 {   console.log(TablePourceage[k].id_projet)
//                 console.log(options[j].id_projet)
//                     if(TablePourceage[k].id_projet==options[j].id_projet)
//                     {
//                             somme+=TablePourceage[k].poucetage
//                     }     

//                 }

//             }

// console.log(somme)


//     }







    // setsomme(s)
    // console.log(s)
    console.log(rowData.id_projet)
    
// for(let j=0;j<TablePourceage.length;j++)
// {
// if(TablePourceage[j].checked==true)
// {
// s+= parseInt(TablePourceage[j].poucetage)
// axios.put("http://localhost:8080/EmployeTest/webapi/projet/updateProgression/"+rowData.id_projet+"/"+s)
// .then(res => {  
//     // setnow(0)             
// setnow(s)
 
//  })
//  .catch(error=>{
//      console.log("Error")
//  })
// // setOpen(false)
// }

// }







 
}



        return(
        <div>
        <Button style={{    marginLeft: "0px",
    width: "100px",
    marginRight: "0px"}} onClick={()=> setOpen(true)}>List TO DO</Button>
        <Dialog
        open={open}
        onClose={()=> setOpen(false)}
        aria-labelledBy='title'
        aria-describedly='descripti'>
            <DialogTitle id='tit'>Check your tasks!</DialogTitle>
            <DialogContent>
                
                {/* <Planmanegement  /> */}
                <ListToDo rowData={rowData} TablePourceage={TablePourceage} setTablePourceage={setTablePourceage} />
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> setOpen(false)}>Cancel</Button>
                <Button autoFocus onClick={()=> test()}>Apply</Button>
            </DialogActions>
        </Dialog>
       </div>
       )

    }