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
 
const api = axios.create({
  baseURL: `http://localhost:8080/EmployeTest/webapi`
})
 
 

 
function Idid({data,setData}) {
  const classes = useStyles();
  var columns = [
 
    // {title: "image", field: "image", hidden: true },
    // {title: "id", field: "id", hidden: true },
    {title: "Id", field: "id"},
    {title: "Full Name", field: "fullName"},
    {title: "Experience", field: "experience"},
    // {title: "Actions", field: "Actions"}
  ]
  // const [data, setData] = useState([]); //table data
 
  //for error handling
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])


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


 
  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    
    let errorList = []
    if(newData.id === ""){
      errorList.push("Please enter ID")
    }
    if(newData.fullName === ""){
      errorList.push("Please enter Full Name")
    }
    // if(newData.email === "" || validateEmail(newData.email) === false){
    //   errorList.push("Please enter a valid email")
    // }
 
    if(errorList.length < 1){
      axios.put("http://localhost:8080/EmployeTest/webapi/employes/update", newData)
      .then(res => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
        resolve()
        setIserror(false)
        setErrorMessages([])
      })
      .catch(error => {
        setErrorMessages(["Update failed! Server error"])
        setIserror(true)
        resolve()
         
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
 
    }
     
  }
 
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
 
  const handleRowDelete = (oldData, resolve) => {
    api.delete("/users/"+oldData.id)
    axios.delete("http://localhost:8080/EmployeTest/webapi/employes/remove/"+oldData.id)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }
 
  return (
    <div className="App" style={{marginTop:"60px"}} >
        {/* <h2  style={{ textAlign:"center"}}>
           Student Details
         </h2> */}
       <Grid  style={{width: "900px"}} >
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
           
              options={{
                headerStyle:{size:'80px'},
               
                actionsColumnIndex: -1,
                toolbarButtonAlignment:"left",
                  
                  
                  
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
              
           
          
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                      handleRowUpdate(newData, oldData, resolve);
                       
                  }),
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                     handleRowAdd(newData, resolve)
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    handleRowDelete(oldData, resolve)
                  }),
              }}
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
 
export default Idid;