import '../styles/tableDy.css'
import '../styles/test.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Filter, FilterVintage } from '@material-ui/icons';
import Multiselect from 'multiselect-react-dropdown';
import Rating from "react-rating";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Picky from "react-picky";
import "react-picky/dist/picky.css";

import Select from 'react-select'
// employes,
const ListTache = ({ targetKeys, column ,selectedRow,ratings, setratings }) => {
const columnt=[
    {heading:'Task', value:'description'},
    {heading:'Difficult level', value:'Difficult_level'},
    {heading:'Number of days', value:'jours',style:{width:"300px"}},
    {heading:'Responsable', value:'fullName'},

]
// const [ratings, setratings] = useState([]);



// const columnt2=[
//     // {heading:'Task', value:'description'},
//     // {heading:'Difficult level'},
//     {heading:'Responsable', value:'fullName'},
   

// ]


// const columnt3=[
    
//     {heading:'Number of days', value:'jours'},

// ]
// const datat=data1.map((number) => datat.push(number));
const [data, setData] = useState([]);
const [data1, setData1] = useState([]);
const [rating1, setRating1] = useState(0);
const [employeChoisi, setemployeChoisi ]= useState([]);
const [employes, setemployes ]= useState([ { value: 'chocolate', label: 'Chocolate' },{ value: 'strawberry', label: 'Strawberry' }]);
const [selectedOption, setSelectedOption] = useState(null);

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

useEffect(() => { 
  axios.get("http://localhost:8080/EmployeTest/webapi/employes")
      .then(res => {               
        setemployes(res.data)
          console.log(res.data)

          employes.forEach(element => {
            
          });
       })
       .catch(error=>{
           console.log("Error")
       })
}, [])












useEffect(() => { 
    let dataToAdd = [...data]
    let ratingToAdd=[...ratings]
  
    for(let i=0;i<targetKeys.length;i++)
    {
    axios.get("http://localhost:8080/EmployeTest/webapi/taches/"+targetKeys[i])
        .then(res => {   
            dataToAdd.push(res.data)  
            const dataa ={
              idTache: targetKeys[i].toString(),
              // description:dataToAdd[i].toString(),
              niveauDifficulte: "",
              nbJours:"",
              responsable:""
            //  descDription: `${val[i].description }`,
          
             
             }; 
             console.log(dataa)
             console.log(selectedRow )
            ratingToAdd.push(dataa)        
            setData(dataToAdd)
            



         
            setratings(ratingToAdd)
            console.log(res.data)
            console.log(ratings)
            console.log(ratings.length)
   
    })
         .catch(error=>{
             console.log("Error")
         })}
  }, [])

  function setjours(val,item){
  
    for(let i=0;i<ratings.length;i++)
    {
      if(ratings[i].idTache==item.id)
      {
      console.log("tt"+ratings[i].idTache)
      ratings[i].nbJours=val
      }
    }
    console.log(ratings)
  }

 


  function onSelect(val,item) {
   console.log("respsble",val)
   
    for(let i=0;i<ratings.length;i++)
    {
      if(ratings[i].idTache==item.id)
      {
      console.log("tt"+ratings[i].idTache)
      ratings[i].responsable=val
      }
    }
    console.log(ratings)

    
   
}
//   function onSelect(selectedList, selectedItem) {
//     console.log(selectedItem.id)
//     for(let i=0;i<ratings.length;i++)
//     {
     
      
//       ratings[i].Responsable=selectedItem.id
      
//     }
//     setemployeChoisi(selectedList)
// }

function onRemove(selectedList, removedItem) {
  console.log(selectedList)
}




function modif(val,item){
 
  for(let i=0;i<ratings.length;i++)
  {
    if(ratings[i].idTache==item.id)
    {
    console.log(ratings[i].idTache)
    ratings[i].niveauDifficulte=val
    // setRating1(val)
    }
  }
  console.log(ratings)
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
          data.map((item, index) =>
         <TableRow item={item} column={columnt} employes={employes}  rating1={rating1} modif={modif} 
         setjours={setjours}  ratings={ratings}  onSelect={ onSelect} onRemove={onRemove}
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

const TableRow = ({ item, column ,employes,rating1,modif,setjours,ratings, onSelect,onRemove,setSelectedOption}) => (
    
  <tr>
    {column.map((columnItem, index) => {

      if(columnItem.value=="jours") {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
        return <td>
              <input type="number" placeholder="jours" required
                                //  value={id}
                                  onChange={e=>setjours(e.target.value,item)}
                                style={{width:"70px"}} />



            </td>
      }
      if(columnItem.value=="fullName") {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
       
        return <td  >
                  
                          {/* <Multiselect
                          className='excep'
                                    options={employes} // Options to display in the dropdown
                                  //  selectedValues={employes} // Preselected value to persist in dropdown
                                     onSelect={onSelect}
                                    //  {
                                     
                                   
                                    //     // console.log({value})
                                    //   for(let i=0;i<ratings.length;i++)
                                    //   {
                                    //     if(ratings[i].key==item.niveauDifficulte)
                                    //     {
                                    //     console.log(ratings[i].key)
                                    //     ratings[i].Responsable=val
                                    //     }
                                    //   }
                                    
                                   
                                    //   } // Function will trigger on select event
                                     onRemove={onRemove} // Function will trigger on remove event
                                    displayValue="fullName" // Property name to display in the dropdown options
                                    onChange={() => console.log("idid")}
                                     /> */}
         
     
         {/* <Select options={employes}
         placeholder={"Employe"} 
         onChange={onSelect(setSelectedOption,item)}/> */}
 <select  placeholder='Employe'  onChange={(e) => onSelect(e.target.value,item) }>
        {employes.map((cate,index) => (
                <option  key={cate.id} value={cate.id}>{cate.fullName}</option>
            ))}
        </select>


            </td>
      }

      if(columnItem.value=="Difficult_level") {
        // const itemSplit = columnItem.value.split('.') //['address', 'city']
      
        return <td style={{width:"300px"}}>
         
                  <div className="App">
      
      <Rating
        initialRating={rating1}
        onClick={rate => modif(rate,item)}
      />
      <p>Level: {rating1}</p>
    </div>
            </td>
      }
      return <>
      <td>{item[`${columnItem.value}`]}  </td>
    
      </>
    })}
 
  </tr>

)




export default ListTache