import React from 'react';
function UserRequestCard(props){
    let collectorName = props.info.collector[0].name;
    let approved = props.info.request.is_approved;
    let declined = props.info.request.is_declined;
    let canceled = props.info.request.is_canceled;
    let done = props.info.request.is_done;
    let status = "";
    let statusStyle = {}
    if (approved === 0 && declined === 0 && canceled === 0 ){
        status = "is pending"
        statusStyle = pendingStyle;
    }else if(approved ===1 && declined ===0 && done === 0){
        status = "is approved!"
        statusStyle = successStyle;
    }else if(approved === 0 && declined ===1 && canceled === 0){
        status ="is declined";
        statusStyle = declinedStyle;
    }else{
        status = "cancelled"
        statusStyle = declinedStyle;
    }

    let pickupDate = new Date(props.info.request.pickup_date).toString().slice(0,15);
    let pickupTime = props.info.request.pickup_time.toString().slice(0,-3);
    return(
<div className="col-md-4" >
                                <div className="card border border-dark" style={{backgroundColor:"white", border: 2+"px solid",borderRadius:10+"px", fontWeight:"500"}} >
                                    
                                    
                                    <div className="card-body" style={{backgroundColor:"white", borderRadius:10+"px", padding:3+"%"}}>
                                    <strong className="card-title">{collectorName}</strong>
                                        <div className="card-text" style={statusStyle}>{status}</div>
                                        <div className="card-text" >You scheduled for: {pickupDate} {pickupTime}</div>
                                    
                                    </div>
                                </div>
                            </div>

    )}

    export default UserRequestCard;

var pendingStyle={
    background:"#945700",
    width:"30%",
    color:"white",
    margin: 0, 
    padding:0,
    paddingLeft:"1%"
}

var successStyle={
    background:"#5CB85C", 
    color:"white",
    width:"30%",
    margin: 0, 
    padding:0,
    paddingLeft:"1%"
}

var declinedStyle = {
    background:"#6C100E", 
    color:"white",
    width:"30%",
    margin: 0, 
    padding:0,
    paddingLeft:"1%"
}