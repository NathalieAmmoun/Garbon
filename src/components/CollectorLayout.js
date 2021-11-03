import React,{useRef, useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
function SideMenu(){
	const [user, setUser]=useState(()=>{const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      return JSON.parse(loggedInUser)}else{return null}});
	  let history = useHistory();
	  if (user===null){
		  history.push("/login")
	  }
	  

	const [pendingRequestsCount, setPendingRequestsCount]=useState(0);
	function toWeeklyPickupChart(){
	window.location.href = "/weekly-pickups-analytics";
}
function toMonthlyPickupChart(){
	
	window.location.href = "/monthly-pickups-analytics";}
	function toMonthlyRequestChart(){
	
		window.location.href = "/monthly-requests-analytics";}
		function toWeeklyRequestChart(){
			
			window.location.href = "/weekly-requests-analytics";}

			function toCollectorProfile(){
			
				window.location.href = "/collector-profile";}
				function toPendingRequests(){
			
					window.location.href = "/your-pending-requests";}
					const handleLogout = () => {
						setUser({});
						localStorage.clear();

						window.location.href="/";

					  };
    async function getPendingRequests(user){
		const url = "http://18.217.195.205/api/auth/get-unapproved-requests"
        
	   try{
            var token ='Bearer '+ user.access_token;
		    const response = await axios.get(url,{
             headers:{
			 Authorization: token,
             },
		 });
		 setPendingRequestsCount(response.data.length);
		 
	   }catch(error){
		   console.log(error);
	   }
	 } 

     useEffect(()=>{
        getPendingRequests(user);
	},[user]);
	
    return(
        <div>

			<header className="page_header  header_darkgrey section_padding_20">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12" >
							<div className="header_left_logo display_table" >
								<a href="/#" className="logo top_logo display_table_cell">
									<img src="./assets/images/GO__1.png" alt="" />
									<span className="logo_text">
										<span className="big">Garbon</span>
						
									</span>
                                    
								</a>
								<div className=" text-right display_table_cell hidden-xs" style={{color: "white"}}>
                                    {user!== null && <h4 style={{marginTop:0, marginBottom:0}}>{user.user.first_name} {user.user.last_name}</h4>}
                                    </div>
								</div>
                                
							
						</div>
					</div>
				</div>
			</header>

            <header className="page_header_side_sticked active-slide-side-header" style={sideMenuStyles}>
			

					<nav className="mainmenu_side_wrapper" >
							
							<ul className="menu-click side" style={{position: "fixed"}}>
							<li>
									<Link  onClick={toCollectorProfile}>
									<i className="fa fa-calendar"></i>
										Schedule
									</Link>
									</li>
								<li>
									<Link onClick={toPendingRequests}>
									<i className="fa fa-paper-plane-o"></i>
										Requests <span style={{ color:"#white", opacity: "0.6"}}>{pendingRequestsCount}</span>
										
									</Link>
								</li>
							<div className="" style={{padding:"3px", width:"100%", marginRight:"5%", marginTop:"2%"}}>
								<h4 className="" style={{width:"100%", marginTop:"4%",marginLeft:"10%" }} ><i className="fa fa-bar-chart"></i>Analytics</h4>
						</div>
								<li>
									<Link onClick={toWeeklyPickupChart} >
									
										Past Week Pickups
									</Link>
									</li>
									<li>
									<Link   onClick={toMonthlyPickupChart}>
									
										Past Month Pickups
									</Link>
									</li>
									<li>
									<Link  onClick={toWeeklyRequestChart} >
									
										Past Week Total Requests 
									</Link>
									</li>
									<li>
									<Link  onClick={toMonthlyRequestChart} >
									
										Past Month Total Requests
									</Link>
									</li>
								</ul>
								<ul className="menu-click side" style={{position:"fixed",
    bottom: 0}}>
									
										<li >
											<a href="/#" >
												<i className="fa fa-edit"></i>
												Edit Profile
											</a>
										</li>
									
										<li>
											<a href="" onClick={handleLogout}>
												<i className="fa fa-sign-out"></i>
												Log Out
											</a>
										</li>
							</ul>
							
						</nav>
					

	
			</header>

			<header className="page_header header_darkgrey">
				<div className="pull-right big-header-buttons">		
				</div>
			</header>
            </div>
    )
}

var sideMenuStyles={
    background: "#54be73",
	fontSize: "16px",
	fontWeight: "bold",
    position: "absolute",
    width: "20%",
    top: "auto",
    float: "left",
	height: "100%",
	padding: 0,
     margin: 0,
    lineHeight:0,

	
}
export default SideMenu;
