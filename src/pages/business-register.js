import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function BusinessRegistration(){
	const [name, setName] = useState("");
	const [industry, setIndustry] = useState("");
	const [description, setDescription] = useState("");
	const [user, setUser] = useState(()=>{const loggedInUser = localStorage.getItem("user");
	if (loggedInUser) {
	  return JSON.parse(loggedInUser)}});
	const history = useHistory();
	async function addBusiness(){
		let url = "http://18.217.195.205/api/auth/add-business";
		let token ='Bearer '+ user.access_token;
		if(name !== "" && industry !== "" ){
		
			try{ let response = await axios.post(url, {
			name : name,
			industry : industry,
			description: description,
			
		},
		{
			headers:{
			  Authorization: token,
			}
		})
		console.log(response.data);
		history.push("/address-registration")
	}
		catch(error){
			console.log(error);
		}}else{
			alert('please enter all necessary information')
		}
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
									Enter Business Details
								</h4>
								<hr className="bottommargin_30" />
								<div className="wrap-forms">
									<form>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label htmlFor="login-name">Name</label>
													<i className="grey fa fa-user"></i>
													<input type="text" className="form-control required" id="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
												</div>

											</div>
										</div>
										<div className="row">
										<div className="col-sm-12">
										<div className="form-group" >
											<select className="required form-control" style={{fontSize: 12+"px",color:'gray', paddingTop:0 +"px", paddingBottom: 0 +"px"}} name="user_type" id="user_type" onChange={(e)=>setIndustry(e.target.value)}>
												<option value="0">Add Industry</option>
												<option value="1">Medical</option>
												<option value="2">Retail</option>
												<option value="3">Education</option>
												<option value="4">Agriculture</option>
												<option value="5">Technology</option>

											</select>
										</div>
										</div>
										</div>
						
										
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label >Description</label>
													<i className="grey fa fa-pencil-square-o"></i>
													<input type="text" className="form-control" id="description" placeholder="Description(Optional)" onChange={(e)=>setDescription(e.target.value)} />
												</div>
											</div>
										</div>
										
										<button type="button" className="theme_button block_button color1" onClick={addBusiness}>Create an account</button>
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

export default BusinessRegistration;