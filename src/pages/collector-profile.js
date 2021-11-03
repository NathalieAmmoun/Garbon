import React, { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction"; 
import '@fullcalendar/timegrid/main.css';
import Table from "../components/requests-table";
import axios from "axios";
import { Link ,withRouter } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from 'moment';
import SideMenu from "../components/CollectorLayout";
function CollectorProfile(){
	const [pendingRequestsCount, setPendingRequestsCount]=useState(0);
	const [user, setUser]=useState(()=>{const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      return JSON.parse(loggedInUser)}});
	const [approvedRequests, setApprovedRequests] = useState([]);
	const [modal, setModal] = useState(false);
	const [clickedEvent, setClickedEvent]= useState({});


	
	const toggle = () => {
        setModal(!modal);
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
	 async function getApprovedRequests(user){
		const url = "http://18.217.195.205/api/auth/get-approved-requests"
        
	   try{
            var token ='Bearer '+ user.access_token;
		    const response = await axios.get(url,{
             headers:{
			 Authorization: token,
             },
		 });

		 setApprovedRequests(response.data);

	   }catch(error){
		   console.log(error);
	   }
	 } 
	 async function eventDoneAPI(user, req_id){
		const url = "http://18.217.195.205/api/auth/event-done"
        
	   try{
            var token ='Bearer '+ user.access_token;
		    const response = await axios.post(url,{
				request_id : req_id
			},{
             headers:{
			 Authorization: token,
             },
			
			 
		 });

		getApprovedRequests(user)

	   }catch(error){
		   console.log(error);
	   }
	 } 
	 async function eventDeleteAPI(user, req_id){
		const url = "http://18.217.195.205/api/auth/event-cancel"
        
	   try{
            var token ='Bearer '+ user.access_token;
		    const response = await axios.post(url,{
				request_id : req_id
			},{
             headers:{
			 Authorization: token,
             },
			
			 
		 });

		getApprovedRequests(user)

	   }catch(error){
		   console.log(error);
	   }
	 }
	 async function eventChangeAPI(user, event_id, user_id, time, date){
		const url = "http://18.217.195.205/api/auth/event-change"
        
	   try{
            var token ='Bearer '+ user.access_token;
		    const response = await axios.post(url,{
				request_id : event_id,
				pickup_date : date,
				pickup_time : time
			},{
             headers:{
			 Authorization: token,
             },
		 });
		 console.log(response.data)
		getApprovedRequests(user)

	   }catch(error){
		   console.log(error);
	   }
	 }
	
	 useEffect(()=>{
        getPendingRequests(user);
		getApprovedRequests(user);
	},[user]);
	function markDone(){
		eventDoneAPI(user, clickedEvent.id);
		toggle();
	}
	function deleteEvent(){

		eventDeleteAPI(user, clickedEvent.id);
		toggle();
	}
	 let scheduleEvents = approvedRequests.map((request, index)=>{
		 
		 var color ="#3788d8";
		 if(request.request.is_done===1){
			color ="#54be73";
		 }
	 	return {groupId: "pickup hours",id:request.request.id, title:`Customer Name: ${request.user[0].first_name} ${request.user[0].last_name} |
		  Address: ${request.address[0].city}, ${request.address[0].street}, ${request.address[0].bldg}, ${request.address[0].floor}`, start: `${request.request.pickup_date}T${request.request.pickup_time}`, color: color, editable: true}
	 })
        return(
            <div className="admin">

	
	<div id="canvas">
		<div id="box_wrapper">



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
								<li className="active">Dashboard</li>
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
							<h3 style={{marginLeft:"-1%"}}>Upcoming Pickups</h3>
						</div>
</div>

<div>
<FullCalendar 
   
    contentHeight={"auto"}
  plugins={[ timeGridPlugin, interactionPlugin ]}
 
  initialView="timeGridWeek"
  weekends={false}
  allDaySlot={false}
  eventOverlap = {false}
  nowIndicator= {true}
  editable= {true}
  eventConstraint={"pickup hours"}

  eventDrop= { function( event) {
    if (!window.confirm("Are you sure about this change?")) {
      event.revert();
    }else {
		let event_id = event.event._def.publicId;
		let user_id = event.event._def.title.slice(4,5);
		let time = moment.utc(event.el.fcSeg.start).format('HH:mm').toString()
		let date = moment.utc(event.el.fcSeg.start).format('YYYY-MM-DD').toString()
		
		eventChangeAPI(user, event_id, user_id,time, date )
		
	}

  }}
  eventClick={function (e){
	  console.log(e);
	setClickedEvent({ id: e.event._def.publicId, user_id: e.event._def.title.slice(4,5), title: e.event._def.title, start : moment.utc(e.el.fcSeg.start).toString()});
	
	  toggle();
	}}
  events={scheduleEvents}
  
/>

<Modal fade={false}
              isOpen={modal}
              toggle={toggle}
            >
              <ModalHeader toggle={toggle}>
                Is This Pickup Done? 
              </ModalHeader>
              <ModalBody>
                <div>
				{clickedEvent.title} <br /> {clickedEvent.start}
                </div>
              </ModalBody>
              <ModalFooter style ={modalStyles}>
			  <Button  color="success"  style={modalButtons} onClick={markDone}>Mark Done</Button>
                <Button  color="danger" style={modalButtons} onClick={deleteEvent}>Delete</Button>
                <Button color="secondary" style = {cancelButton} onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>	</div>
			</div>
 </section>
 </div>
                </div>
    </div>
</div>
         )
}

const modalStyles={
	display : "flex",
	justifyContent: "flex-start",


}
const modalButtons={
	
	padding : "12px 12px",
	margin :0,
	marginRight: "10px",
	fontWeight: 0,
	borderRadius :"10px",


}

const cancelButton={
	display: "flex",
	justifyContent : "flex-end",
	padding : "12px 12px",
	margin :0,
	marginLeft: "auto",
	fontWeight: 0,
	borderRadius :"10px",

}
export default withRouter(CollectorProfile);