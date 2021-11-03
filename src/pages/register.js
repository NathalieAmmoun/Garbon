import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register(){
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userType, setUserType] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword]= useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const history = useHistory();
	async function register(){
		let url = "http://127.0.0.1:8000/api/auth/register";
		if(userType !== "0" && firstName !== "" && lastName !== "" && phone !== "" && email !=="" && password !== "" & confirmPassword !== ""){
		try{ let response = await axios.post(url, {
			first_name : firstName,
			last_name : lastName,
			user_type : userType,
			phone: phone,
			email: email,
			password: password,
			password_confirmation: confirmPassword
		})
		console.log(response.data);
		localStorage.setItem('user', JSON.stringify(response.data));
		if (userType==="2"){
			history.push("/address-registration");}
			else if(userType === "3"){
				history.push("/business-registration");
			}else if(userType === "4"){
				history.push("/collector-registration");
			}
	}
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
									Sign Up New Account
								</h4>
								<hr className="bottommargin_30" />
								<div className="wrap-forms">
									<form>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label htmlFor="login-name">Your First Name</label>
													<i className="grey fa fa-user"></i>
													<input type="text" className="form-control" id="first_name" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} />
												</div>

											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
										<div className="form-group has-placeholder">
											<label htmlFor="login-name">Your Last Name</label>
											<i className="grey fa fa-user"></i>
											<input type="text" className="form-control" id="last_ame" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
										</div>
										</div>
										</div>
										<div className="row">
										<div className="col-sm-12">
										<div className="form-group" >
											<select className="form-control" style={{fontSize: 12+"px",color:'gray', paddingTop:0 +"px", paddingBottom: 0 +"px"}} name="user_type" id="user_type" onChange={(e)=>setUserType(e.target.value)}>
												<option value="0">Sign Up As</option>
												<option value="2">Residential User</option>
												<option value="3">Business User</option>
												<option value="4">Waste Collector</option>
											</select>
										</div>
										</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label htmlFor="login-phone">Phone</label>
													<i className="grey fa fa-phone"></i>
													<input type="tel" className="form-control" id="login-phone" placeholder="961 XX XXXXXX" onChange={(e)=>setPhone(e.target.value)}/>
												</div>

											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label htmlFor="login-email">Email address</label>
													<i className="grey fa fa-envelope-o"></i>
													<input type="email" className="form-control" id="login-email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}/>
												</div>

											</div>
										</div>
										
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label htmlFor="login-password">Password</label>
													<i className="grey fa fa-pencil-square-o"></i>
													<input type="password" className="form-control" id="login-password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label htmlFor="login-password2">Retype Password</label>
													<i className="grey fa fa-pencil-square-o"></i>
													<input type="password" className="form-control" id="login-password2" placeholder="Retype Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
												</div>
											</div>
										</div>
										<button type="button" className="theme_button block_button color1" onClick={register}>Create an account</button>
									</form>
								</div>

							</div>
						

							<p className="divider_20 text-center">
					Already registered? <Link to="/login">Log In</Link>.
				</p>

						</div>
						
					</div>
				
				</div>
			
			</section>
		</div>
		
	</div>
            </div>)}

            export default Register;