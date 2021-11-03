import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// eslint-disable
function UserProfileCard(props){
    const [user, setUser]=useState(()=>{const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      return JSON.parse(loggedInUser)}else{return null}});
    const handleLogout = () => {
        setUser({});
        localStorage.clear();

        window.location.href="/";

      };
    return(
<div className="col-md-4" >

                                <aside className="text-center"  style={{backgroundColor:"black", border: 3+"px solid"}}>
                                    <section className="card"   >
                                    <div className="card-header" style={{padding:12+"px",height:20+ "rem" ,backgroundColor: "#343A40"}}>
                                    <div className="media">
                                                <a href="/#">
                                                    <img className="align-self-center rounded-circle mr-3" style={{width:85+"px", height:85 + "px", borderRadius:50+"%", margingTop:6+"px"}} alt="" src="./assets/images/avatar.jpg" />
                                                </a>
                                                <div className="media-body">
                                                    <h2 className="text-light display-6" style={{color:"white"}}>Jim Doe</h2>
                                                    
                                                </div>
                                            </div>
  </div>


                                        <ul className="list-group list-group-flush" style={{margin:0}}>
                                            <li className="list-group-item">
                                                <a href="/#">
                                                <i className="fa fa-edit"></i>Edit Profile
                                                    
                                                </a>
                                            </li>
                                            <li className="list-group-item">
                                                <Link onClick={handleLogout}>
                                                <i className="fa fa-sign-out"></i>Logout
                                                 
                                                </Link>
                                            </li>
                                        </ul>

                                    </section>
                                </aside>
                                </div>
                                

    )}

    export default UserProfileCard;
