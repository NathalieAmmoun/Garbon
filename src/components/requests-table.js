import React, {useEffect, useState} from 'react';
import axios from 'axios';
function Table(props){
    const [user, setUser]=useState(()=>{const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      return JSON.parse(loggedInUser)}else{return null}});

    const [pendingRequests, setPendingRequests]=useState([]);

  
      useEffect(()=>{
          getPendingRequests(user);
    },[user], [pendingRequests]);
      async function getPendingRequests(user){
      const url = "http://18.217.195.205/api/auth/get-unapproved-requests"
          
       try{
              var token ='Bearer '+ user.access_token;
          const response = await axios.get(url,{
               headers:{
         Authorization: token,
               },
       });
       setPendingRequests(response.data);
       }catch(error){
         console.log(error);
       }
     } 

    var address="";
    var customerName ="";
    var pickupDate="";
    var pickupTime="";
    var requestId="";
    if (pendingRequests.length>=1){
    var requests = pendingRequests.map((request, index)=>{
        address = request.address[0].city +", "+ request.address[0].street +", " + request.address[0].bldg +" Building " + request.address[0].floor +" Floor";
        customerName = request.user[0].first_name +" " + request.user[0].last_name;
        pickupDate = new Date(request.request.pickup_date).toString().slice(0,15);
        pickupTime = request.request.pickup_time.toString().slice(0,-3);
        requestId = request.request.id;
        return (
    <tr key={index}>
      <th scope="row">{customerName}</th>
      <td>{address}</td>
      <td>{pickupDate}</td>
      <td>{pickupTime}</td>
      <td><button className="btn btn-success" value ={requestId} style={{padding:15+"px", borderRadius: "50%", letterSpacing: 0, margin: "0", lineHeight:0}} onClick={approveRequest}><i className="fa fa-check"></i></button></td>
      <td><button className="btn btn-danger" value ={requestId} style={{padding: 15+"px", borderRadius: "50%", letterSpacing: 0, margin: "0", lineHeight:0}} onClick={(e)=>{declineRequest(e.target.value) }}><i className="fa fa-times"></i></button></td>
    </tr>
        )
    })
}

function approveRequest(e){

  approveRequestAPI(e.currentTarget.value)
}
    async function approveRequestAPI(req){
      console.log(req)
			var token ='Bearer'+user.access_token;
			try{ const response = await axios.post(
			'http://127.0.0.1:8000/api/auth/approve-request',
				{
				  request_id: req
				},
				{
				  headers: {
					"Authorization": token,
				  },
				}
			  );
        getPendingRequests(user)
			}catch(error){
				  console.log(error);
			  }

			
		}	

        async function declineRequest(req){
			var token ='Bearer'+user.access_token;
			try{ const response = await axios.post(
			'http://127.0.0.1:8000/api/auth/decline-request',
				{
				  request_id: req,
				},
				{
				  headers: {
					"Authorization": token,
				  },
				}
			  );
        getPendingRequests(user)
			}catch(error){
				  console.log(error);
			  }

			
		}	
    return( <div>
       {pendingRequests.length>0 &&
        <table className="table table-bordered table-responsive text-center " style={{margin:0, fontWeight:400}}>
  <thead className="thead-dark text-center" style={{backgroundColor:"#343a40", fontColor: "white"}}>
    <tr>
      <th scope="col" style={{color: "white"}}>Customer Name</th>
      <th scope="col" style={{color: "white"}}>Customer Address</th>
      <th scope="col" style={{color: "white"}}>Date</th>
      <th scope="col" style={{color: "white"}}>Time</th>
      <th scope="col" style={{color: "white"}}>Approve</th>
      <th scope="col" style={{color: "white"}}>Decline</th>
    </tr>
  </thead>
  <tbody>
    {requests}
  </tbody>
</table>} {pendingRequests.length === 0 &&  <div className="text-center" style={{marginTop:"20%"}}><h3 style={{color:"#848484"}}>No Peding Requests</h3></div>}
</div>
    )
}
export default Table;