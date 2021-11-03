import React from 'react';
import TagComponent from './tagComponent';
function CollectorCard(props){
    const recyclables = props.collector.recyclables;
    const collectorName= props.collector.collectors.name;

    var recyclable = recyclables.map((tag, index)=>{

		return (
			<TagComponent key ={index} tag={tag} />
			)
	})

   

    return(
        <div>
            <div className="col-md-4 col-sm-6">
							<article className="vertical-item content-padding with_background text-center rounded overflow-hidden">
								<div className="item-content">
									<h4 className="entry-title">
										<a href="/#">{collectorName}</a>
									</h4>
                                    <h5 className="text-left entry-title" style={{fontSize: 14+"px"}}>Recycles:</h5>
									{recyclable}
								</div>
							</article>
						</div>
        </div>)
    }
    export default CollectorCard;


