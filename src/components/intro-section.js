import React from 'react';
function IntroSection(){
    return(
        <section className="intro_section page_mainslider ds">
        <div className="" >
            <ul className="slides">

                <li>
                    <img src="./assets/images/bins1.png" alt="" style={{width:"100%"}}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <div className="slide_description_wrapper">
                                    <div className="slide_description">
                                        <div className="intro-layer" data-animation="fadeInRight">
                                            <h3 className="highlight">
                                                Garbon
                                            </h3>
                                        </div>
                                        <div className="intro-layer" data-animation="fadeInRight">
                                            <h2>
                                                Recycling
                                            </h2>
                                        </div>
                                        <div className="intro-layer" data-animation="fadeInRight">
                                            <p>Sustainable lifestyle made easy.<br /> Save Your community, Save Your planet</p>
                                    
                                        </div>
                                        <div className="intro-layer text-center">
                                            <ul style={{ listStyle:'none'}}>
                                                <li>
                                            <a href="#pickup" className="btn btn-success theme_button color2 margin_0" >Schedule pickup</a>
                                            </li>
                                            </ul>
                                                
                                        </div>
                                    </div>
                                    
                                </div>
                            
                            </div>
                            
                        </div>
                        
                    </div>
                
                </li>

            </ul>
        </div>

    </section>

    )}

    export default IntroSection;