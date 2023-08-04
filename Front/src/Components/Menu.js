import React, { useState } from "react";
import  "../styles/SideNavBar.css";
import grid from '../icons/grid.svg'
import Logo from '../icons/Logo.svg'
import CI from '../icons/CI.png'
import croissance from '../icons/croissance.png'
import taches from '../icons/taches.png'
import planification from '../icons/planification.png'
import projet from '../icons/projet.png'
import employe from '../icons/employe.png'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
export default function Menu() {
 
  const [isExpanded, setExpendState] = useState(true);
	const menuItems = [
		{
			text: "Employes",
		    icon:employe,
			path:"/Employe"
			//path:"/Idid"
		},
	
		{
			text: "Taches",
			icon: taches,
			path:"/Tache"
		},
		{
			text: "Projets",
			icon: projet,
			path:"/Projet"
		},
		{
			text: "Avancement",
			icon: croissance,
			path:"/ProjetFinal"
		},
		{
			text: "Avancement employe",
			icon: planification,
			path:"/Avancement_employe"
		
		},
	
	];


	
	return (
	
		<div style={{height: "180vh"}} 

			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
       <div className="container">
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							{/* <img src={Logo} alt="" srcSet="" /> */}
							{/* <h2  style={{fontFamily:"sans-serif"}} >Intensive Consulting</h2> */}
							<img src={CI} style={{
						    width: "220px",
							paddingRight: "50px",
							paddingTop: "10px"}}/>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon ,path}) => (
						<Nav.Link as={Link} to={path} >
						<a 
						
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							 key={text}  >
									
						<div className="zou">
							<img className="menu-item-img" src={icon} alt="" srcSet="" />
							{isExpanded && <p className="title-item" style={{fontFamily:"sans-serif"}}> {text}</p>}
							</div>
						
						</a>
						</Nav.Link>
					))}
				</div>
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/employe.png"
							alt=""
							srcSet=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">projet</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/employe.png" alt="" srcSet="" />
			</div>
		</div>
		
	);
}
