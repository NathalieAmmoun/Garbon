import React from 'react';
function AboutSection(){
    return(
        <section id="about" className="ls section_padding_top_100 section_padding_bottom_150">
				<div className="container item-content">
					<div className="row">
						<div className="col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2 text-center">
							<h2 className="section_header with_icon">
								Welcome to Garbon
							</h2>
							<p className="small-text grey">More About Us</p>
							<p className="bottommargin_30">
								Garbon groups all waste management companies in one website, proudly serving individuals and businesses in Beirut, Lebanon with garbage pickups to recycle and reduce waste.
				</p>

						</div>
					</div>
					<div className="row topmargin_40 columns_margin_top_60">
						<div className="col-md-6">
							<div className="teaser with_border rounded text-center">
								<div className="teaser_icon main_bg_color2 round size_small offset_icon">
									<i className="fa fa-leaf"></i>
								</div>
								<h4 className="poppins hover-color2">
									<a href="/#">Corporate Services</a>
								</h4>
								<p>
						Guaranteed that all of your universal waste management is performed safely and responsibly.
					</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="teaser with_border rounded text-center">
								<div className="teaser_icon main_bg_color3 round size_small offset_icon">
									<i className="fa fa-inbox"></i>
								</div>
								<h4 className="poppins hover-color3">
									<a href="/#">Convenient Pickup</a>
								</h4>
								<p>
						We offer business pickup services to safely recycle your waste in a safe manner.
					</p>
							</div>
						</div>
					</div>
				</div>
			</section>
    )}
    export default AboutSection;