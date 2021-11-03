import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Footer from '../components/footer';
import CollectorCard from '../components/collector-card';
import { Link, useHistory, withRouter } from 'react-router-dom';
import KommunicateChat from "./chat";
import Services from '../components/services';
import HomeNavBar from '../components/homeNavBar';
import IntroSection from '../components/intro-section';
import AboutSection from '../components/about-section';
function Home(){

	const [collectors,setCollectors]= useState([]);
	const [timeSlots, setTimeSlots] =useState([]);
	const [selectCollector, setSelectCollector] =useState("");
	const [selectDate, setSelectDate] =useState("");
	const [user, setUser] = useState(()=>{const loggedInUser = localStorage.getItem("user");
	if (loggedInUser) {
	  return JSON.parse(loggedInUser)}else{return null}});
	const [pickupTime, setPickupTime] = useState("");
	const [pickupTimeId, setPickupTimeId] = useState("");
	const [scheduleSuccess, setScheduleSuccess] = useState("");
	let history = useHistory();

	useEffect(()=>{

		//GETTING COLLECTORS	
	async function getCollectorAPI(){
		const url = "http://18.217.195.205/api/display-all-collectors"
	   try{
		 const response = await axios.get(url);
		 setCollectors(response.data);
		 
	   }catch(error){
		   console.log(error);
	   }
	 } 
	 
		//GETTING Available Times 
		async function getAvailableTimeAPI(){
			const url = "http://18.217.195.205/api/available-time"
		   try{
			 const response = await axios.post(url,{
				 date:selectDate,
				 collector_id: selectCollector
			 });
			 setTimeSlots(response.data);
			 
		   }catch(error){
			   console.log(error);
		   }
		 } 
		 getCollectorAPI();
		 getAvailableTimeAPI();
		 
	},[selectCollector, selectDate],[timeSlots])
	
	if (collectors.length>=1){
	var collector = collectors.map((user, index)=>{
		return (
			<CollectorCard key ={index} collector={user} />
			)
	})
	//setting time slot options 
	if (timeSlots.length>=1){
		var availableTime = timeSlots.map((time, index)=>{
			return (
				<option key={time.id} id={time.id} value={time.time_slot.slice(0,-3)}>{time.time_slot.slice(0, -3)}</option>
				)
		})
	}
	//setting collector options
	var options = collectors.map((coll,index)=>{
		
		return (<option key={index} value={coll.collectors.id}>{coll.collectors.name}</option>)
	})
	}
	//Disabling previous dates in datepicker
		const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        var minDate= yyyy + "-" + mm + "-" + dd;


	//Requesting Pickups	
	async function requestPickup(){
		if (Object.keys(user).length===0){
			return history.push("/login")
		}else{
			var token ='Bearer'+ user.access_token;
			try{ const response = await axios.post(
			'http://18.217.195.205/api/auth/request-pickup',
				{
				  collector_id: selectCollector,
				  pickup_date: selectDate,
				  pickup_time: pickupTime,
				  pickup_time_id:pickupTimeId
				},
				{
				  headers: {
					"Authorization": token,
				  },
				}
			  );

			  console.log(response.data);
			  setScheduleSuccess(<div className="alert alert-success text-center" role="alert">Scheduling was Successful <br/> Please Go to your profile for more details</div>)

			}catch(error){
				  console.log(error);
			  }

			
		}	
	}
	
        return(
            <div>
				 {/* chatbot */}
                <KommunicateChat />
               
				<div id="canvas">
				<div id="box_wrapper">
				<HomeNavBar />
				<IntroSection />
				<AboutSection />
            <hr className="" />
            <section className="ls section_padding_top_100 section_padding_bottom_100" id="collectors">
				<div className="container">
                <div className="row">
						<div className="col-sm-12 text-center">
							<h2 className="section_header with_icon">
								Our Waste Management Companies
							</h2>
						</div>
					</div>
					<div className="row topmargin_30 columns_margin_bottom_20">
                        {collector}
                        <div className="col-sm-12 text-center">
                        <Link to="/collectors" style={{fontSize:18+ "px"}}>View All</Link>
                        </div>
                        </div>
                        </div>

                        </section>
						{scheduleSuccess}
			<section id="pickup" className="ds page_contact parallax section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							<h2 className="section_header with_icon">
								Schedule Pickup
							</h2>
							<form className="contact-form row columns_margin_bottom_20" method="post">
								<div className="col-md-4">
									<div className="form-group select-group">
										<label htmlFor="login-name">Waste Collector
											<span className="required">*</span>
										</label>
										<i className="fa fa-truck highlight2" aria-hidden="true"></i>
										<select aria-required="true"  className="choice empty form-control" onChange={(e)=>{setSelectCollector(e.target.value)}}>
											<option defaultValue="">Waste Collector</option>
											{options}
											
											
										</select>
										<i className="fa fa-angle-down theme_button" aria-hidden="true"></i>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label htmlFor="pickup-date">Date
											<span className="required">*</span>
										</label>
										<i className="fa fa-calendar highlight2" aria-hidden="true"></i>
										
  										 <input type="date" className="date-input form-control" id="pickup_date"  name="pickup_date" min={minDate} onChange={(e)=>{setSelectDate(e.target.value)}}/>
										  
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group select-group">
										<label htmlFor="pickup-time">Time
										<span className="required">*</span>
										</label>
										<i className="fa fa-calendar highlight2" aria-hidden="true"></i>
										<select aria-required="true"  name="time" className="choice empty form-control" defaultValue=""
										 onChange={(e)=>{
											 setPickupTime(e.target.value); 
											 const index = e.target.selectedIndex;
     const optionElement = e.target.childNodes[index];
     const optionElementId = optionElement.getAttribute('id');
											 setPickupTimeId(optionElementId)}} >
											<option defaultValue="">Time</option>
											{availableTime}
										</select>
										<i className="fa fa-angle-down theme_button" aria-hidden="true"></i>
									</div>
								</div>

								<div className="col-sm-12">

									<div className="contact-form-submit topmargin_20">
										<button type="button" id="pickup_submit" name="contact_submit" className="theme_button color1" onClick={requestPickup}>Order pickup</button>
									</div>
								</div>


							</form>

						</div>
					</div>
				</div>
			</section>
			<Services />	
			<Footer />
		</div>
	</div>
            </div>
        )
    }

export default withRouter(Home);