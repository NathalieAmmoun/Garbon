import React, { useEffect,useState }  from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function AddressRegistration(){
	const [user, setUser] = useState(()=>{const loggedInUser = localStorage.getItem("user");
	if (loggedInUser) {
	  return JSON.parse(loggedInUser)}});
	  const [city, setCity] = useState("");
	  const [street, setStreet] = useState("");
	  const [building, setBuilding] = useState("");
	  const [floor, setFloor] = useState("");
	  const history = useHistory();


	  async function addAddress(){
		  let url = "http://18.217.195.205/api/auth/add-address";
		  let token ='Bearer '+ user.access_token;
		  if(city !== "" && street !== "" && building !== "" && floor !== ""){
		  try{ let response = await axios.post(url, {
			  city : city,
			  street : street,
			  bldg : building,
			  floor : floor,
		  },{
			  headers:{
				Authorization: token,
			  }
		  })
		  console.log(response.data);
		  localStorage.setItem('user', JSON.stringify(response.data));
		  
			  history.push("/");}
		  catch(error){
			  console.log(error);
		  }}
	  }
        return(
            <div>
<div id="canvas">
		<div id="box_wrapper">		
			<section className="ls section_padding_top_100 section_padding_bottom_100 section_full_height">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
							<div className="with_border with_padding">

								<h4 className="text-center">
									Enter Your Address
								</h4>
								<hr className="bottommargin_30" />
								<div className="wrap-forms">
									<form>
									<div className="row">
										<div className="col-sm-12">
										<div className="form-group" >
											<select className="form-control" style={{fontSize: 12+"px",color:'gray', paddingTop:0 +"px", paddingBottom: 0 +"px"}} name="user_type" id="user_type" onChange={(e)=>setCity(e.target.value)}>
												<option value="">City</option>
												<option value="Beirut">Beirut</option>
												<option value="Saida">Saida</option>
												<option value="Tripoli">Tripoli</option>
											</select>
										</div>
										</div>
										</div>
                                        <div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label for="street">Street</label>
													<i className="grey fa fa-pencil-square-o"></i>
													<input type="text" className="form-control required" id="street" placeholder="Street" onChange={(e)=>setStreet(e.target.value)}/>
												</div>

											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label for="building">Building</label>
													<i className="grey fa fa-pencil-square-o"></i>
													<input type="text" className="form-control required" id="bldg" placeholder="Building" onChange={(e)=>setBuilding(e.target.value)}/>
												</div>

											</div>
										</div>
                                        <div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label for="floor">Floor</label>
													<i className="grey fa fa-pencil-square-o"></i>
													<input type="text" className="form-control required" id="floor" placeholder="Floor" onChange={(e)=>setFloor(e.target.value)}/>
												</div>

											</div>
										</div>
						
										
										
										
										<button type="button" className="theme_button block_button color1" onClick={addAddress}>Create an account</button>
									</form>
								</div>

							</div>
						</div>
						
					</div>
				
				</div>
			
			</section>
		</div>
		
	</div>
            </div>)
    }

export default AddressRegistration;