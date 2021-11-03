import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BarChart from "../components/bar-chart";
import SideMenu from "../components/CollectorLayout";
function MonthlyPickupsAnalytics(){
	
	const [user, setUser]=useState(()=>{const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      return JSON.parse(loggedInUser)}});
	const [monthlyPickups, setMonthlyPickups ]= useState([])
	
    useEffect(()=>{
	
		getMonthlyPickupAnalytics(user)
	},[user], [monthlyPickups]);


	
	async function getMonthlyPickupAnalytics(user){
		const url = "http://18.217.195.205/api/auth/monthly-pickups-analytics"
        
	   try{
            var token ='Bearer '+ user.access_token;
		    const response = await axios.get(url,{
             headers:{
			 Authorization: token,
             },
		 });

		 setMonthlyPickups(response.data);

	   }catch(error){
		   console.log(error);
	   }
	 } 
	
    return(
		<div>
<SideMenu />
<div className="" style={{position:"relative", marginLeft:"20%"}}>
			<section className="ls with_bottom_border">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<ol className="breadcrumb darklinks">
								<li>
									<Link to="/">Homepage</Link>
								</li>
								<li className="active">Monthly Pickups Analytics</li>
							</ol>
						</div>
						
						
						
					</div>
					
				</div>
				
			</section>
	
<section className="ls section_padding_top_50 section_padding_bottom_50 columns_padding_10">
				<div className="container-fluid">
	<div className="row">
					</div>
					<div className="row">
						<div className="col-md-12">
							<h3 style={{marginLeft:"3%"}}>Monthly Pickups</h3>
							 <BarChart data={monthlyPickups} />
						</div>
</div>
</div>
</section>
</div>
</div>
    )}

export default MonthlyPickupsAnalytics;