import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory,withRouter } from 'react-router-dom';
function Login(){
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	async function login(){
		let url = "http://18.217.195.205/api/login";
		try{ let response = await axios.post(url, {
			email: email,
			password: password
		})
		console.log(response.data);
		localStorage.setItem('user', JSON.stringify(response.data));
		history.push("/");
	}
		catch(error){
			console.log(error);
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
									Sign In to Your Account
								</h4>
								<hr className="bottommargin_30" />
								<div className="wrap-forms">
									<form>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label htmlFor="login-email">Email address</label>
													<i className="grey fa fa-envelope-o"></i>
													<input type="email" className="form-control" id="login-email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" />
												</div>

											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group has-placeholder">
													<label htmlFor="login-password">Password</label>
													<i className="grey fa fa-pencil-square-o"></i>
													<input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} id="login-password" placeholder="Password" />
												</div>
											</div>
										</div>
								
										<button type="button" className="theme_button block_button color1" onClick={login}>Log In</button>
									</form>
								</div>
						

							</div>
							

							<p className="divider_20 text-center">
					Not registered? <Link to="/register">Create an account</Link>.<br />
					or go <Link to="/">Home</Link>
				</p>

						</div>
					
					</div>
				
				</div>
			
			</section>
		</div>
	</div>
            </div>
        )
    }


export default withRouter(Login);