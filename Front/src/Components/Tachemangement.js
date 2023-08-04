import React, { useState, useEffect } from 'react';
// import { PickList } from 'primereact/picklist';
// import { ProductService } from '../service/ProductService';
import { Transfer,Button } from 'antd';
import Item from 'antd/es/list/Item';
import  "../styles/PickListDemo.css";
import axios from 'axios';
// const Tachemangement = () => {
//     const [mockData, setMockData] = useState([]);
//     const [targetKeys, setTargetKeys] = useState([]);
//     const [dataa, setDataa] = useState([]);
//     // const productService = new ProductService();
//     useEffect(() => { 
//         axios.get("http://localhost:8080/EmployeTest/webapi/taches")
//             .then(res => {               
//                 setDataa(res.data)
//                 console.log(res.data)
                 
//              })
//              .catch(error=>{
//                  console.log("Error")
//              })
//       }, [])

//     // useEffect(() => {
//     //     axios.get("http://localhost:8080/EmployeTest/webapi/taches")
//     //     .then(res => {               
//     //         setMockData(res.dataa)
//     //         console.log("ee"+res.dataa)
            
//     //      })
//     //      .catch(error=>{
//     //          console.log("Error")
//     //      })
//     //    getMock();
//     // }, []); // eslint-disable-line react-hooks/exhaustive-deps

//     const  getMock = () => {
//         const  mockData = [];
//         const targetKeys = [];
//         // for(let i=0 ;i<20;i++){
//         //     const data ={
//         //         key:i.toString(),
//         //         title: `content$(i+1)`,
//         //         description: `description of content$(i+1)`,
//         //         chosen: Math.random()*2 >1,
//         //     };
//         //     if(data.chosen){
//         //         targetKeys.push(data.key);
//         //     }
//         //     mockData.push(data);
//         // }
        

//         for(let i=0 ;i<20;i++){
//             const data ={
//                 key:i.toString(),
//                 title: `content$(i+1)`,
//                 description: `description of content$(i+1)`,
//                 chosen: Math.random()*2 >1,
//             };
//             if(data.chosen){
//                 targetKeys.push(data.key);
//             }
//             dataa.push(data);
//         }
    //     for(let i=0;i<dataa.length;i++)
    //     {

    //  const data ={
    //             key:i.toString(),
    //             title: dataa[i].description.toString(),
    //             description: dataa[i].description.toString(),
    //             chosen: Math.random()*2 >1,
    //         };
    //         if(data.chosen){
    //             targetKeys.push(data.key);
    //         }
    //         mockData.push(data);

    //     }

        
//     setDataa(dataa);
//     setTargetKeys(targetKeys);
//     }


//     const handleChange=(targetKeys)=>{
//         setTargetKeys(targetKeys);
//     }


//         return (
//             <div className='App'>
//               <h1>test</h1>
//               <Transfer 
//               dataSource={dataa}
//               showSearch
//               listStyle={{
//                 width:250,
//                 height:300,
//               }}
//             operations={["Right","Left"]}
//             targetKeys={targetKeys}
//             onChange={handleChange}
//             render={(item)=>`${item.description}-${item.niveauDifficulte}`}
//             />
//             </div>
//         );
//     }

 

// export default Tachemangement;                 

// const { createRoot } = ReactDOM;

// const {  Button, Transfer  } = antd;
import TableDymique from './TableDymique';
// { employes, setemployes }
const Tachemangement = ({ taches, ListTache , selectedRow ,targetKeys,setTargetKeys})  => {
  const [mockData, setMockData] = useState([]);
  // const [targetKeys, setTargetKeys] = useState([]);
  const [test, setTest] = useState([]);
  const listt=[]
  const listt1=[]
  
  const [listTache, setListTache] = useState([]);




  useEffect(() => {
    axios.get("http://localhost:8080/EmployeTest/webapi/taches")
    .then(res => {               
     
        let dataToAdd = [...test];
        dataToAdd.push(res.data);
        setTest(dataToAdd);
      
        console.log("l de test"+test.length)
        console.log("l de listt"+ listt.length)
        getMock(res.data);
     })
     .catch(error=>{
         console.log("Error")
     })
    //  getMock();
  }, []);
 

  




  const getMock = (val) => {
   
 
    const tempTargetKeys = [];
    const tempMockData = [];
    // for (let i = 0; i < 20; i++) {
    //   const data = {
    //     key: i.toString(),
    //     title: `content${i + 1}`,
    //     description: `description of content${i + 1}`,
    //     chosen: i % 2 === 0,
    //   };
    //   if (data.chosen) {
    //     tempTargetKeys.push(data.key);
     
    //   }
     
    //   tempMockData.push(data);
    //   console.log(data)
    // }

    
    
  
    
   

 
    for(let i=0;i<val.length;i++)
    {
      
 console.log("rr"+ val[i])
 
 const data ={
         key: val[i].id.toString(),
        title: `content${val[i].id }`,
        description: `${val[i].description }`,
        chosen: i % 2 === 0,
          //  chosen: true,
        
        };
        if (data.chosen) {
                tempTargetKeys.push(data.key);
             
              }
             
              tempMockData.push(data);
              console.log(data)
            }



    setMockData(tempMockData);

   
       setTargetKeys(tempTargetKeys);
           setListTache(tempTargetKeys)
          //  console.log(listTache)

  };
// function testeeee()
// {
//   // console.log(employes)
//   // console.log(targetKeys);
//   <TableDymique employes={employes} setemployes={setemployes}/>
// }


  const handleChange = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
 
  };
  const renderFooter = (_, { direction }) => {
    if (direction === 'left') {
      return (
        <Button
          size="small"
          style={{
            float: 'left',
            margin: 5,
          }}
          onClick={getMock}
        >
          Left button reload
        </Button>
      );
    }
    return (
      <Button
        size="small"
        style={{
          float: 'right',
          margin: 5,
        }}
        onClick={getMock}
      >
        Right button reload
      </Button>
    );
  };
  return (

<>

    <Transfer
      dataSource={mockData}
      showSearch
      listStyle={{
        width: 250,
        height: 300,
      }}
      operations={['to right', 'to left']}
     
      targetKeys={targetKeys}
      onChange={handleChange}
      render={(item) => `${item.description}`}
      footer={renderFooter}
    
        
    />
    <Button onClick={console.log("employes")}>Apply</Button>
    {/* employes={employes} setemployes={setemployes} */}
    <TableDymique   selectedRow ={ selectedRow } targetKeys={targetKeys} />
</>


    
  );
};
// const ComponentDemo = App;


// createRoot(mountNode).render(<ComponentDemo />);
export default Tachemangement; 
