import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import CollectorCard from "../components/collector-card";
import GeneralHeader from "../components/general-header";
import axios from "axios";
import CollectorsIntro from "../components/collectors-intro";
function DisplayCollectors(){
const [collectors,setCollectors]= useState([]);
	useEffect(()=>{
		getCollectorAPI();
	},[])
   async function getCollectorAPI(){
	   const url = "http://18.217.195.205/api/display-all-collectors"
	  try{
		const response = await axios.get(url);
		setCollectors(response.data);
		
	  }catch(error){
		  console.log(error);
	  }
	} 

	
	if (collectors.length>=1){
	var collector = collectors.map((user, index)=>{

		return (
			<CollectorCard key ={index} collector={user} />
			)
	})
	}
        return(
            <div>
			
				<GeneralHeader />
                <CollectorsIntro />
            <section className="ls section_padding_top_100 section_padding_bottom_100">
				<div className="container">
					<div className="row topmargin_30 columns_margin_bottom_20">
            			 {collector} 
                        </div>
                        </div>
                        </section>
                <Footer />
            </div>)
        }
    
export default DisplayCollectors;