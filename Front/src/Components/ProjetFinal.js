import React, { useState, useEffect } from 'react';
 import { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from 'react-avatar';
import Avatar1 from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
 
import MaterialTable , { MTableToolbar } from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';
import  "../styles/Employe.css";
import DialogTache from "./DialogTache";
import ProgressBar from 'react-bootstrap/ProgressBar';
import DialogPlans from './DialogPlans';
import { format } from 'date-fns'
const useStyles = makeStyles((theme) => ({
  Avatar1: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light)
},
  overrides: {
    '& .MTableToolbar-searchField-13':{
      // marginDense:{
        paddingLeft: 0,
        // backgroundColor:"red"
       },
       '& .MuiToolbar-gutters': {
        paddingLeft: 0,
       
      },
      '& .MTableToolbar-root-8 ': {
        paddingRight: 50,
       
      }

    //  }
   },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    toolbarWrapper: {
      '& .MuiToolbar-gutters': {
        paddingLeft: 0,
       
      }}
 
      }));
 
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
 

 
 

 
function ProjetFinal() {
  const classes = useStyles();
  const [idProject,setidProject]=useState({})
  const [data,setData]=useState([])
  const [options, setoptions] = useState([]);
  const [EmployesProj,setEmployesProj]=useState([])
  const [restOfdays,setrestOfdays]=useState(0)
  const [rowActuelle,setrowActuelle]=useState(0)
  const [now,setnow]=useState(0)
  // const now = 60;
  



  // useEffect((val) => { 
  //   axios.get("http://localhost:8080/EmployeTest/webapi/planning_task/employes/"+val)
  //       .then(res => {  
                      
  //         setEmployesProj(res.data)
  //        console.log(res.data)
  //        })
  //        .catch(error=>{
  //            console.log("Error")
  //        })
  // }, [])



  const current = new Date();
 // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  function calculate(val) {
  
var date1 = new Date(date);
//var date2 = new Date("2023-12-02");
var date2 =  new Date(val.DDF);
console.log( val.DDF.toString())
// var date2 = new Date(val.DDF.toString());
//date1=format(date1, 'yyyy-MM-dd')
//date2=format(date2, 'yyyy-MM-dd')
console.log( date1)
  console.log( date2)
  const diffTime = date2 - date1;
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//   var mdy1 = date1.split('-')
//   date1= new Date(mdy1[2], mdy1[0]-1, mdy1[1]);
if (diffDays < 0){
  diffDays += -1;
}
// var mdy2 =  date2.split('-')
// date2= new Date(mdy2[2], mdy2[0]-1, mdy2[1]);
console.log( date1)
  console.log( date2)
  console.log(Math.round((date2-date1)/(1000*60*60*24)))
  // setrestOfdays(Math.round((date2-date1)/(1000*60*60*24)))
  
// To calculate the time difference of two dates
console.log(val)
return(
  <p>{diffDays}</p>
)

}
 
function calculateProgress(rowData)
{
// console.log(rowData.progression)
setnow(rowData.progression)
// // let s=0
// for(let i=0;i<data.length;i++)
// {
//   if(data[i].id_projet==rowData.id_projet)
//   {
    // if(options[i].checked==true)
    // s+=parseInt(options[i].niveauDifficulte)
//     setnow(data[i].progression)
//   }

return(
  {now}
)
// }
// set

}



const trouve=(val)=>{
  console.log(val.employe)


         return(
          val.employe.map((cat) => (
            <p>
              {cat.fullName} 
              </p>
          ))



         )
  //console.log(EmployesProj)
}



useEffect(() => { 

  axios.get("http://localhost:8080/EmployeTest/webapi/planning_task")
      .then(res => {               
          setoptions(res.data)
          
          console.log(res.data)

       })
       .catch(error=>{
           console.log("Error")
       })
      
}, [])











  var columns = [
 
    //  {title: "id_projet", field: "id_projet" },
     {title: "name", field: "name" },
    {title: "DDB", field: "DDB"},
    {title: "jour_visite", field: "jour_visite"},
    
    {title: "Deadline", field: "DDF"},
    {title: "The rest of days", field: "The rest of days",
    render:(rowData)=>
    <div>
   
       {calculate(rowData)}
       
         </div> 
         },


    {title: "Employes",field: "employe",
  
    render:rowData=>
    <div>
        
        {trouve(rowData)} 
       
         </div>
         },
    {title: "Progression", field: "progression",
    // employes={employes} setemployes={setemployes}
       render:rowData=><div>
       
  <ProgressBar now={rowData.progression} label={`${rowData.progression}%`} />
       </div>       
  
  },
    {title: "List to do", 
    // employes={employes} setemployes={setemployes}
       render:rowData=><div>
         <DialogPlans rowData={rowData} now={now}  setnow={setnow} options={options} setoptions={setoptions} />
       </div>       
  
  },
  
  ]

  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])
  const [rowIdex,setRowIdex]=useState(0)
 

  useEffect(() => { 
    axios.get("http://localhost:8080/EmployeTest/webapi/projet/getWithEmployes")
        .then(res => {               
            setData(res.data)
            
            console.log(res.data)
            calculate()
         })
         .catch(error=>{
             console.log("Error")
         })
        
  }, [])





  useEffect(() => { 
    axios.get("http://localhost:8080/EmployeTest/webapi/employes")
        .then(res => {  
                      
          setEmployesProj(res.data)
         console.log(res.data)
      
         })
         .catch(error=>{
             console.log("Error")
         })
        
  }, [])
 
//   const handleRowUpdate = (newData, oldData, resolve) => {
//     //validation
    
//     let errorList = []
//     if(newData.id === ""){
//       errorList.push("Please enter ID")
//     }
//     if(newData.fullName === ""){
//       errorList.push("Please enter Full Name")
//     }
//     // if(newData.email === "" || validateEmail(newData.email) === false){
//     //   errorList.push("Please enter a valid email")
//     // }
 
//     if(errorList.length < 1){
//       axios.put("http://localhost:8080/EmployeTest/webapi/employes/update", newData)
//       .then(res => {
//         const dataUpdate = [...data];
//         const index = oldData.tableData.id;
//         dataUpdate[index] = newData;
//         setData([...dataUpdate]);
//         resolve()
//         setIserror(false)
//         setErrorMessages([])
//       })
//       .catch(error => {
//         setErrorMessages(["Update failed! Server error"])
//         setIserror(true)
//         resolve()
         
//       })
//     }else{
//       setErrorMessages(errorList)
//       setIserror(true)
//       resolve()
 
//     }
     
//   }
 
  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = []
    if(newData.id === ""){
      errorList.push("Please enter id")
    }
    if(newData.fullName=== ""){
      errorList.push("Please enter fullname")
    }
    
    // if(newData.email === undefined || validateEmail(newData.email) === false){
    //   errorList.push("Please enter a valid email")
    // }
 
    if(errorList.length < 1){ //no error
     // api.post("/users", newData)
      axios.post("http://localhost:8080/EmployeTest/webapi/employes/create", newData)
      .then(res => {
        let dataToAdd = [...data];
        dataToAdd.push(newData);
        setData(dataToAdd);
        resolve()
        setErrorMessages([])
        setIserror(false)
      })
      .catch(error => {
        setErrorMessages(["Cannot add data. Server error!"])
        setIserror(true)
        resolve()
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }

  function SedIdPROJRT(val)
  {
   
    console.log(idProject)
    setRowIdex(val)
    // setidProject(data[val].id_projet)
    // console.log(idProject)
    let d
    for(let i=0;i<data.length;i++)
    {
     
      if(i==val)
      {
        // console.log(val)
        // console.log(data[val])
        // console.log(data[i])
      // console.log(data[i])
      d=data[i]
      setidProject(data[i])
      
    }
    }
    setidProject(d)
    console.log(d)
    console.log(idProject)
  }
 
//   const handleRowDelete = (oldData, resolve) => {
//     api.delete("/users/"+oldData.id)
//     axios.delete("http://localhost:8080/EmployeTest/webapi/employes/remove/"+oldData.id)
//       .then(res => {
//         const dataDelete = [...data];
//         const index = oldData.tableData.id;
//         dataDelete.splice(index, 1);
//         setData([...dataDelete]);
//         resolve()
//       })
//       .catch(error => {
//         setErrorMessages(["Delete failed! Server error"])
//         setIserror(true)
//         resolve()
//       })
//   }
 
  return (
    <div className="App" style={{marginTop:"60px"}} >
        {/* <h2  style={{ textAlign:"center"}}>
           Student Details
         </h2> */}
         {/* <button  onClick={trouve(64)}>test</button> */}
       <Grid  style={{width: "1150px"}} >
          <Grid   container spacing={0}  item xs={10}> </Grid>
          <Grid    item xs={10}   >
            
          <div>
            {iserror && 
              <Alert severity="error">
                  {errorMessages.map((msg, i) => {
                      return <div key={i}>{msg}</div>
                  })}
              </Alert>
            }       
          </div>
            <MaterialTable mt={90}  
              // title="Student Details"
           
              title=""
              columns={columns}
              data={data}
              
              icons={tableIcons}
              onRowClick={(event, rowData) => SedIdPROJRT(rowData.tableData.id)}
              enableColumnActions={false}

              // actions={[
              //   {
              //     icon: 'add',
              //     tooltip: 'Add User',
              //     isFreeAction: true,
              //     onClick: (event) => alert("You want to add a new row")
              //   }
              // ]}


              options={{
              
               
                
                headerStyle:{size:'80px'},
               
                actionsColumnIndex: -1,
                toolbarButtonAlignment:"left",
                  
                  isFreeAction:true,
                  
                // searchStyle:{backgroundColor:"red"}
                searchFieldStyle: {
                  marginLeft:"0px",
                 marginRight:"900px",
                 paddingLeft:"0px" ,
                 width:"42%"
                  // backgroundColor:"red",
                  // padding: "5px 10px 5px 15px",
                  // borderRadius: "9px",
                  // fontWeight: 450,
                  // disableUnderline: true,
                  // border: "1px solid #707070",
                }
                }}
              
           
          
              // editable={{
              //   onRowUpdate: (newData, oldData) =>
              //     new Promise((resolve) => {
              //       //   handleRowUpdate(newData, oldData, resolve);
                       
              //     }),
              //   onRowAdd: (newData) =>
              //     new Promise((resolve) => {
              //       //  handleRowAdd(newData, resolve)
              //     }),
              //   onRowDelete: (oldData) =>
              //     new Promise((resolve) => {
              //       // handleRowDelete(oldData, resolve)
              //     }),
              // }}
              components={{
                Toolbar: (props) => {
                  return (
                    // <div style={{ backgroundColor: "beige" ,paddingLeft:"0px",}}>
                    <div className={classes.overrides}  ><MTableToolbar {...props} /></div>
                    // </div>
                  );
                },
              }}
            />
          </Grid>
          <Grid ></Grid>
        </Grid>
       
    </div>
  );
}
 
export default ProjetFinal;






