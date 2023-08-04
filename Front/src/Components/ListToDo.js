import '../styles/tableDy.css'
import '../styles/test.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "react-picky/dist/picky.css";
// import Checkbox from '@mui/material/Checkbox';
import {Box , FormControlLabel, Checkbox} from '@mui/material'


// employes,
const ListToDo = ({ targetKeys, column ,idProject,ratings, setratings,rowData,TablePourceage,setTablePourceage }) => {
const columnt=[
    {heading:'Task', value:'description'},
    {heading:'Difficult level', value:'Difficult_level'},
    {heading:'Check', value:'Check',style:{width:"300px"}},
   

]

const [data, setData] = useState([]);
const [data1, setData1] = useState([]);
const [rating1, setRating1] = useState(0);
const [employeChoisi, setemployeChoisi ]= useState([]);
const [employes, setemployes ]= useState([ { value: 'chocolate', label: 'Chocolate' },{ value: 'strawberry', label: 'Strawberry' }]);
const [selectedOption, setSelectedOption] = useState(null);
const [options, setoptions] = useState([]);
const [tasks, settasks] = useState([]);
// const [TablePourceage, setTablePourceage] = useState([]);
const [Progression, setProgression] = useState(0);
// const [valideTache, setvalideTache] = useState(false);

// const [checked, setchecked] = useState(false);




useEffect(() => { 
 
  axios.get("http://localhost:8080/EmployeTest/webapi/taches")
      .then(res => {   
           
          settasks(res.data)
          console.log(rowData.id_projet )
          console.log(res.data)
          
        // let TablePourceageToAdd=[...TablePourceage]
        //   for(let i=0; i<options.length;i++)
        //   {
            
            
        //   const dataa ={
        //     idTache: options[i].idTache,
        //     id_projet: options[i].idProjet.id_projet,
        //     poucetage:0,
        //     checked:false
          
        //    }; 
           
        //   TablePourceageToAdd.push(dataa)  
        //   console.log("ee",dataa)
        //   }
        //    console.log(TablePourceageToAdd)
        //   setTablePourceage(TablePourceageToAdd)
 
  })
       .catch(error=>{
           console.log("Error")
       })}
, [])








// const options = [
//   { description: 'Plan 3D', Difficult_level: 10 },

// ]




useEffect(() => { 
  let TablePourceageToAdd=[...TablePourceage]
  axios.get("http://localhost:8080/EmployeTest/webapi/planning_task/projet/"+rowData.id_projet)
      .then(res => {               
          setoptions(res.data)
          
          console.log(res.data)
          // calculate()
         
          let TablePourceageToAdd=[...TablePourceage]
          for(let i=0; i<res.data.length;i++)
          {
            
            
          const dataa ={
            idTache: res.data[i].idTache,
            id_projet: res.data[i].idProjet.id_projet,
            poucetage:res.data[i].checked,
            checked:res.data[i].checked
          
           }; 
           
          TablePourceageToAdd.push(dataa)  
          console.log("ee",dataa)
          }
           console.log(TablePourceageToAdd)
          setTablePourceage(TablePourceageToAdd)
       })
       .catch(error=>{
           console.log("Error")
       })
      
}, [])




function calculate(item){
  let diviseur=0
  let unite=0
  for(let i=0;i<options.length;i++)
  {
    diviseur+=parseInt(options[i].niveauDifficulte)
  }
  unite=parseFloat(100/diviseur)
  let resultat=parseInt(item.niveauDifficulte*unite)
  for(let j=0;j<TablePourceage.length;j++)
  {
    if((item.idTache==TablePourceage[j].idTache)&&(item.idProjet.id_projet==TablePourceage[j].id_projet))
    TablePourceage[j].poucetage=resultat
  }
   return(
     <p>{resultat}%</p>
   )
 
 
   
 }


// // const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>
// const handleChange=(event,item)=>
// {
//   setvalideTache(event.target.checked)
//   console.log(valideTache)
//   console.log(item)

// }


const ProgresseProjet=(item)=>{
    const [valideTache, setvalideTache] = useState(item.checked);
  console.log("vv",item.checked)
  const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>
// const handleChange=(event,item)=>
{
  setvalideTache(event.target.checked)
  
 

  console.log(item.niveauDifficulte)

  let diviseur=0
  let unite=0
  for(let i=0;i<options.length;i++)
  {
    diviseur+=parseInt(options[i].niveauDifficulte)
  }
  unite=parseFloat(100/diviseur)
  let resultat=parseInt(item.niveauDifficulte*unite)
  console.log(resultat)




  for(let j=0;j<TablePourceage.length;j++)
  {
    if((item.idTache==TablePourceage[j].idTache)&&(item.idProjet.id_projet==TablePourceage[j].id_projet))
    {
     
      TablePourceage[j].checked=!valideTache
      // if(valideTache==false)
      // TablePourceage[j].checked="false"

    }
   
  }
  console.log(TablePourceage)


}
return(
<Box>
            <Box>
            <FormControlLabel
            // label="xxx"
            control={<Checkbox checked={valideTache} onChange={handleChange} />}
            />

            </Box>
           </Box>

)



}

 








function trouveDescriptio(item){

  

 let s=""
//  console.log(item.idTache)
  for(let i=0;i<tasks.length;i++)
  {
    
    // console.log(tasks[i].id)
    if(tasks[i].id==item.idTache )
    {
   
    s=tasks[i].description
    // console.log(s)
    }
  }
 
  // console.log(item)
  return(
    <p>{s}</p>
  )


  
}


  return (
    <>
    
    
    <table>
      <thead>
   
        <tr>
        
          {columnt.map((item, index) => <TableHeadItem item={item} />)}
          {/* {columnt2.map((item, index) => <TableHeadItem item={item} />)}
          {columnt3.map((item, index) => <TableHeadItem item={item} />)}
           */}
        </tr>
      </thead>
      <tbody>
        {
          options.map((item, index) =>
         <TableRow item={item} column={columnt} calculate={calculate}   trouveDescriptio={trouveDescriptio} 
          ratings={ratings}  ProgresseProjet={ProgresseProjet}
         setSelectedOption={setSelectedOption}
         />
        )
 
         }

    
           {/* {
          data.map((item1, index) =>
         <TableRow1  column={columnt3} />
        )
 
         } */}
      </tbody>
    </table>
    </>
  )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>

const TableRow = ({ item, column ,employes,rating1,ProgresseProjet,trouveDescriptio,calculate,setchecked,valideTache}) => (
    
  <tr>
    {column.map((columnItem, index) => {

      if(columnItem.value=="description") {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
        return <td>
              {trouveDescriptio(item)}



            </td>
      }
      if(columnItem.value=="Check") {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
       
        return <td  >
                  
                  <div>
                    {ProgresseProjet(item)}
      {/* <input type="checkbox" checked={valideTache}  onclick={handleChange(this)} /> */}
      {/* <input type='checkbox' checked={valideTache} onclick={handleChange(item)}></input> */}
      {/* <Checkbox 
      // checked={setchecked(Event.target.checked)}
           onChange={test(checked)}  /> */}

           {/* <Box>
            <Box>
            <FormControlLabel
            // label="xxx"
            control={<Checkbox checked={valideTache} onChange={handleChange} />}
            />

            </Box>
           </Box> */}
           </div>

            </td>
      }

      if(columnItem.value=="Difficult_level") {
        // const itemSplit = columnItem.value.split('.') //['address', 'city']
      
        return <td 
        // style={{width:"300px"}}
        >
         {calculate(item)}
  
            </td>
      }
      return <>
      <td>{item[`${columnItem.value}`]}  </td>
    
      </>
    })}
 
  </tr>

)




export default ListToDo