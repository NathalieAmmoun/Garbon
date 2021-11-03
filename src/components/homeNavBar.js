import React,{useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
function HomeNavBar(){
	const [user, setUser] = useState(()=>{const loggedInUser = localStorage.getItem("user");
	if (loggedInUser) {
	  return JSON.parse(loggedInUser)}
	else{return null}});
	let history = useHistory();
	  var account ="/";
	  if (user!==null){
		
if (user.user.user_type===4){
	account="/collector-profile";
}else{
	account="/my-account";
}}
function handleAccountLink(){

history.push(account);
}
    return(
        <div>
<section className="page_topline cs two_color section_padding_top_5 section_padding_bottom_5 table_section">
				<div className="container-fluid">
					<div className="row  text-center">
						<div className="col-sm-6 text-sm-left">
							<p className="divided-content">
					<span className="medium black">
						Welcome to Garbon
					</span>
					<a href="/#">Give Feedback</a>
				</p>
						</div>
						<div className="col-sm-6 text-sm-right">

							<div className="widget widget_search">
								<form method="get" className="searchform form-inline">
									<div className="form-group-wrap">
										<div className="form-group margin_0">
											<label className="sr-only" htmlFor="topline-search">Search for:</label>
											<input id="topline-search" type="text" defaultValue="" name="search" className="form-control" placeholder="Search Keyword" />
										</div>
										<button type="button" className="theme_button">Search</button>
									</div>
								</form>
							</div>

						</div>
					</div>
				</div>
			</section>

			<header className="page_header header_white toggler_xs_right section_padding_20">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12 display_table">
							<div className="header_left_logo display_table_cell">
								<a href="/#" className="logo top_logo">
									<img src="./assets/images/GO__1.png" alt="" />
									<span className="logo_text">
										<span className="big">Garbon</span>
						
									</span>
								</a>
							</div>

							<div className="header_mainmenu display_table_cell text-center">
								
								<nav className="mainmenu_wrapper " >
									<ul className="mainmenu nav sf-menu">
										<li>
											<a href="#box_wrapper">Home</a>

</li>
<li>
	<a href="#collectors">Collectors</a>
</li>
										<li>
											
											<a href="#pickup">Pickup</a>
										</li>

										<li>
											<a href="#services">Services</a>
										</li>
										<li >
											<a href="#footer">Contact Us</a>
										</li>
									
									<li>
									{user===null&&		<Link  to="/login">login</Link>}
                                    </li>

									<li  >
									{user===null&& 	<Link  to="/register">Register</Link>}
									</li>
								

									
									<li>
									{user!==null&&<Link onClick={handleAccountLink}>My Account</Link>}
									</li>
									

									</ul>
								</nav>
								<span className="toggle_menu">
									<span></span>
								</span>
							</div>

							 <div className="header_right_buttons display_table_cell text-right hidden-xs">
								<ul className=" sf-menu"  >
								</ul>
							</div> 
						</div>
					</div>
				</div>
			</header>
            </div>
    )
}
export default HomeNavBar;