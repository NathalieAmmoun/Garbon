import React from 'react';
function TagComponent(props){
  
    const tagName = props.tag[0].name;
    const tagStyle={
       
        backgroundColor: "#9CC026",
        color: "white",
      fontSize: 14+"px",
      fontWeight: 600,
      lineHeight: 20+ "px",
      padding: 5+"px " +10 + "px",
      margin: 3+"px " + 0,
      borderRadius: 100 + "px",
      borderColor: "white", 
      border: 2+"px solid",
      display: "inline-block"
        }
    
return(
<div style ={tagStyle}>{tagName}</div>
)
}

export default TagComponent;