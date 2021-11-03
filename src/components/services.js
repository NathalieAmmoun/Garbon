import React from 'react';
function Services(){
    return(
        <section id="services" className="ls ms section_padding_100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							<h2 className="section_header with_icon">
								Our Service
							</h2>
							<p className="small-text grey">What we do</p>
						</div>
					</div>
					<div className="row columns_margin_bottom_20">
						
						<div className="col-md-6 col-sm-6 col-md-offset-3">
							<article className="vertical-item content-padding with_background text-center rounded overflow-hidden">
								<div className="item-media">
									<img src="./assets/images/recycling_process.png" alt="" />
								</div>
								<div className="item-content">
									<h4 className="entry-title">
										<a href="/#">Waste Collection &amp; Recycling</a>
									</h4>
									<p className="margin_0">
							Users can easily schedule pickups for recycling their waste.
						</p>
								</div>
							</article>
						</div>
                        </div>
				</div>
			</section>
    )
}
export default Services;