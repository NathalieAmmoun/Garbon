import React, { useEffect,useState }  from "react";
import GeneralHeader from "../components/general-header";
import UserRequestCard from "../components/user-request-card";
import UserProfileCard from "../components/user-profile-card";
import axios from "axios";
function UserProfile(){
    const [user, setUser]=useState(()=>{const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      return JSON.parse(loggedInUser)}});
    const [requests, setRequests]= useState([]);


    async function getMyRequests(user){
		const url = "http://18.217.195.205/api/auth/my-requests"
        
	   try{
            var token ='Bearer '+ user.access_token;
		    const response = await axios.get(url,{
             headers:{
			 Authorization: token,
             },
		 });
		 setRequests(response.data);
		 
	   }catch(error){
		   console.log(error);
	   }
	 } 

     useEffect(()=>{
        getMyRequests(user);
	},[user]);
    if (requests.length>=1){
		var requestCard = requests.map((request, index)=>{
			return (
                <UserRequestCard key={index} info={request} />
				)
		})
	}
        return(
            <div>
                 <GeneralHeader />
               
                <section className=" section_padding_top_100 section_padding_bottom_100 " style={{backgroundColor:"#f7f7f7"}}>
				<div className="container">
					<div className="row topmargin_30 columns_margin_bottom_20">
						<UserProfileCard />
                        <div className="col-md-6">
							<h3 className="dashboard-page-title">Your Pickup Requests From</h3>
						</div>
                        {requestCard}
                            </div>
                            </div>
                            </section>
                         
                </div>
        )
    }

export default UserProfile;