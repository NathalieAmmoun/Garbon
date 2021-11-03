import React, {useState} from 'react';
import axios from 'axios';
import { useHistory, withRouter } from 'react-router-dom';
function CollectorRegistration() {
    const [name, setName] = useState("");
	const [recyclables, setRecyclables] = useState([]);
	const [description, setDescription] = useState("");
	const history = useHistory();
	const [user, setUser] = useState(()=>{const loggedInUser = localStorage.getItem("user");
	if (loggedInUser) {
	  return JSON.parse(loggedInUser)}});
	async function addCollector(){
		let url = "http://18.217.195.205/api/auth/add-collector";
		let token ='Bearer '+ user.access_token;
		 if(name !== ""){
			try{ let response = await axios.post(url, {
			name : name,
			description: description,
			
		},
		{
			headers:{
			  Authorization: token,
			}
		})
		console.log(response.data);
		
	}
		catch(error){
			console.log(error);
		}}
	}

	async function addRecyclable(){
		let url = "http://18.217.195.205/api/auth/add-recyclable";
		let token ='Bearer '+ user.access_token;
		 if(recyclables !== [] && recyclables.includes("0")===false){
			 for(let i = 0; i<recyclables.length; i++ ){
			try{ let response = await axios.post(url, {
			recyclable_id : recyclables[i],	
		},
		{
			headers:{
			  Authorization: token,
			}
		})
		console.log(response.data);
		history.push("/address-registration");
	}
		catch(error){
			console.log(error);
		}}}
	}

	 function registerCollector(){
		 addCollector();
		 addRecyclable();
	}
        return(
            <div>
<div id="canvas">
		<div id="box_wrapper">

			
			<section className="ls section_padding_top_100 section_padding_bottom_100 section_full_height">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 to_animate">
							<div className="with_border with_padding">

								<h4 className="text-center">
									Enter Collector Details
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
											<select className="required form-control" style={{fontSize: 12+"px",color:'gray', paddingTop:0 +"px", paddingBottom: 0 +"px"}} name="recyclable" id="recyclable" onChange={(e)=>setRecyclables([e.target.value])}>
												<option value="0">Add Recyclable</option>
												<option value="1">Plastic</option>
												<option value="2">Glass</option>
												<option value="3">Paper</option>
												<option value="4">Metal</option>
												<option value="5">Cans</option>
												<option value="6">Electric and Electronics</option>
												<option value="7">Clothes and Shoes</option>
												<option value="8">Compost</option>
												<option value="9">Tyres</option>
												<option value="9">Used Cooking Oil</option>
											</select>
										</div>
										</div>
										</div>
						
										
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label >Description</label>
													<i className="grey fa fa-pencil-square-o"></i>
													<input type="text" className="form-control" id="description" placeholder="Description(Optional)"  onChange={(e)=>setDescription(e.target.value)}/>
												</div>
											</div>
										</div>
										
										<button type="button" className="theme_button block_button color1" onClick={registerCollector}>Create an account</button>
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
export default withRouter(CollectorRegistration);