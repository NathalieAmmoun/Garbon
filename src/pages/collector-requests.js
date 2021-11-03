import React, { useState, useEffect } from "react";
import Table from "../components/requests-table";
import axios from "axios";
import { Link ,withRouter } from "react-router-dom";
import SideMenu from "../components/CollectorLayout";

function CollectorPendingRequests(){
    const [user, setUser]=useState(()=>{const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      return JSON.parse(loggedInUser)}else{return null}});
    return (
        <div>
			<SideMenu />		

<div className="" style={{position:"relative", marginLeft:"20%", height:"100%"}}>
       
                    <section className="ls with_bottom_border">
                    <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <ol className="breadcrumb darklinks">
                                        <li>
                                            <Link to="/">Homepage</Link>
                                        </li>
                                        <li className="active">Pending Requests</li>
                                    </ol>
                                </div>
                                
                                </div>
                                
                            </div>
                            
                   
                        
                    </section>
        <section className="ls section_padding_top_50 columns_padding_10">
                       <div className="container-fluid">
            <div className="row">
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 style={{marginLeft:"-0.75%"}}>Pending Requests</h3>
                                </div>
                               
                              <Table /> 
                           
                    </div>
                </div>
         </section>
         </div>
         </div>
        
    )
}

export default withRouter(CollectorPendingRequests);