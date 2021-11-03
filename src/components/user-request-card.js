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
                                <div className="card border border-dark" style={{backgroundColor:"white", border: 2+"px solid",borderRadius:10+"px", }} >
                                    <div className="card-header border" style={{height:3+"rem", backgroundColor:"white", borderRadius:10+"px"}}>
                                    </div>
                                    <div className="card-body" style={{backgroundColor:"#E5E5E5", borderRadius:10+"px", padding:3+"%"}}>
                                    <strong className="card-title">{collectorName}</strong>
                                        <div className="card-text" style={statusStyle}>{status}</div>
                                        <div className="card-text" >You scheduled for: {pickupDate} {pickupTime}</div>
                                    
                                    </div>
                                </div>
                            </div>

    )}

    export default UserRequestCard;

var pendingStyle={
    color:"#945700", 
    margin: 0, 
    padding:0
}

var successStyle={
    color:"#5CB85C", 
    margin: 0, 
    padding:0
}

var declinedStyle = {
    color:"#6C100E", 
    margin: 0, 
    padding:0
}