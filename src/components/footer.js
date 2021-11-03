import React from 'react';
function Footer(){

return (
<div>
<footer id="footer" className="page_footer ds section_padding_top_100 section_padding_bottom_65 columns_padding_25">
				<div className="container">
					<div className="row">
						

						<div className="col-md-4 col-sm-12 text-center">
							<div className="widget">
								<a href="index.html" className="logo bg_logo bottommargin_25">
									<img src="./assets/images/GO__1.png" alt="" />
									<span className="logo_text">
										<span className="big">Garbon</span>
							
									</span>
								</a>
								<p>
									Proudly serving individuals and businesses in Beirut, Lebanon with garbage pickups to recycle and reduce waste.
					</p>
								<div className="line-height-thin">
									<div className="media small-teaser inline-block margin_0">
										<div className="media-left media-middle">
											<i className="fa fa-map-marker highlight2" aria-hidden="true"></i>
										</div>
										<div className="media-body media-middle grey">
											Beirut, Lebanon
										</div>
									</div>
									<br />
									<div className="media small-teaser inline-block margin_0">
										<div className="media-left media-middle">
											<i className="fa fa-phone highlight2" aria-hidden="true"></i>
										</div>
										<div className="media-body media-middle grey">
											01 123 456 789
										</div>
									</div>
									<br />
									<div className="media small-teaser inline-block margin_0">
										<div className="media-left media-middle">
											<i className="fa fa-map-marker highlight2" aria-hidden="true"></i>
										</div>
										<div className="media-body media-middle highlightlinks">
											<a href="/#"><span className="__cf_email__" data-cfemail="13747c746176767d53606663637c61673d707c7e">[email&#160;protected]</span></a>
										</div>
									</div>
								</div>

								<div className="darklinks topmargin_20">
									<a href="/#" className="social-icon border-icon rounded-icon soc-facebook"></a>
									<a href="/#" className="social-icon border-icon rounded-icon soc-twitter"></a>
									<a href="/#" className="social-icon border-icon rounded-icon soc-google"></a>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-12 text-center"></div>

						<div className="col-md-4 col-sm-6 text-center">
							<div className="widget widget_contact topmargin_10">
								<h3>Contact Form</h3>
								<form className="contact-form topmargin_45" method="post" action="https://html.modernwebtemplates.com/gogreen/">
									<p className="contact-form-name">
							<label htmlFor="footer-name">Name <span className="required">*</span></label>
							<input type="text" aria-required="true" size="30" defaultValue="" name="name" id="footer-name" className="form-control text-center" placeholder="Full Name" />
						</p>
									<p className="contact-form-email">
							<label htmlFor="footer-email">Email <span className="required">*</span></label>
							<input type="email" aria-required="true" size="30" defaultValue="" name="email" id="footer-email" className="form-control text-center" placeholder="Email Address" />
						</p>
									<p className="contact-form-message">
							<label htmlFor="footer-message">Message</label>
							<textarea aria-required="true" rows="3" cols="45" name="message" id="footer-message" className="form-control text-center" placeholder="Message"></textarea>
						</p>
									<p className="footer_contact-form-submit topmargin_30">
							<button type="submit" id="footer_contact_form_submit" name="contact_submit" className="theme_button color1 wide_button">Send Message</button>
						</p>
								</form>
							</div>
						</div>


					</div>
				</div>
			</footer>

</div>
)

}

export default Footer;