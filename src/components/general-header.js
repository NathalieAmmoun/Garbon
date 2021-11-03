import React from 'react';
import { Link } from 'react-router-dom';
function GeneralHeader(){
    return(
        <div>
<section className="page_topline cs two_color section_padding_top_5 section_padding_bottom_5 table_section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-6 text-center text-sm-left">
							<p className="divided-content">
					<span className="medium black">
						Welcome to Garbon
					</span>
					<a href="/#">Give Feedback</a>
				</p>
						</div>
						<div className="col-sm-6 text-center text-sm-right">

							<div className="widget widget_search">
								<form method="get" className="searchform form-inline" action="https://html.modernwebtemplates.com/gogreen/">
									<div className="form-group-wrap">
										<div className="form-group margin_0">
											<label className="sr-only" htmlFor="topline-search">Search for:</label>
											<input id="topline-search" type="text" defaultValue="" name="search" className="form-control" placeholder="Search Keyword" />
										</div>
										<button type="submit" className="theme_button">Search</button>
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
								
								<nav className="mainmenu_wrapper text-center" >
									<ul className="mainmenu nav sf-menu">
										<li>
											<Link to="/">Home</Link>
</li>

									</ul>
								</nav>
								<span className="toggle_menu">
									<span></span>
								</span>
							</div>

							<div className="header_right_buttons display_table_cell text-right hidden-xs">
								<ul className=" sf-menu"  >
								<li>
										<a style={{margin:10+ "px"}} href="/#">My Account</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
                
            </div>
    )}

    export default GeneralHeader;