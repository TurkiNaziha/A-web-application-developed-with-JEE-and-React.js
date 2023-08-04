import React, { useState, useEffect } from 'react';
// import { PickList } from 'primereact/picklist';
// import { ProductService } from '../service/ProductService';
import { Transfer } from 'antd';
import Item from 'antd/es/list/Item';
import  "../styles/Plan.css";

const Planmanegement = () => {
 

        return (
           <div className="container2" style={{
        paddingLeft: "55px",
        height: "996px"}}>
            <header>Plan</header>
             <form action="#">
                <div className="form first" >
                    <div className="details personal">
                        <span className="title"></span>
                        <div className="fields">
                            <div className="input-field" >
                                <label>Plan aménagement</label>
                                <select style={{margintop:"20px"}}>
                                    <option>PDF/S</option>
                                    <option>PDF/M</option>
                                    <option>PDF/L</option>
                                    <option>Auto CAD/S</option>
                                    <option>Auto CAD/M</option>
                                    <option>Auto CAD/L</option>
                                    <option>Creation/S</option>
                                    <option>Creation/M</option>
                                    <option>Creation/L</option>
                                </select>
                            </div>
                          
                            <div className="input-field" >
                                <label>Plan situation projetée</label>
                                <select style={{margintop:"20px"}}>
                                    <option>PDF/S</option>
                                    <option>PDF/M</option>
                                    <option>PDF/L</option>
                                    <option>Auto CAD/S</option>
                                    <option>Auto CAD/M</option>
                                    <option>Auto CAD/L</option>
                                    <option>Creation/S</option>
                                    <option>Creation/M</option>
                                    <option>Creation/L</option>
                                </select>
                            </div>
                            </div>
                    </div>
                    </div>
                  
                    </form>
                    </div>
        );
    }

 

export default Planmanegement;                 