// import React from 'react'
import Menu from './Components/Menu'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Employe from './Components/Employe'
import Avancement_employe from './Components/Avancement_employe'
import Projet from './Components/Projet'
import Tache from './Components/Tache'
import Tachemangement from './Components/Tachemangement'
import ProjetTable from './Components/ProjetTable'
import ProjetFinal from './Components/ProjetFinal'



import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'
//import Tachemangement from './Components/Idid'
// import Idid from './Components/Idid'
import  "./App.css";
export default function App() {
  return (
    <BrowserRouter >
   <div className='cot'>
      <Menu />
      
      <div className='marg'>
        {/* <Employe /> */}
      <Routes>
        <Route path="/Employe"  element={<Employe/>}/>
        {/* <Route path="/Idid"  element={<Idid/>}/> */}
         <Route path="/Avancement_employe" element={<Avancement_employe/>}/>
         <Route path="/Projet" element={<Projet/>}/>
         <Route path="/Tache" element={<Tache/>}/>
         <Route path="/Tachemangement" element={<Tachemangement/>}/>
         <Route path="/ProjetTable" element={<ProjetTable/>}/>
         <Route path="/ProjetFinal" element={<ProjetFinal/>}/>
      </Routes>






 
      </div>
    </div>
  
       {/* <Employe />  */}
       </BrowserRouter>
  // <Idid />
  )
}

