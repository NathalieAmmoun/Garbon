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

                                <aside className="text-center"  style={{backgroundColor:"rgb(52, 58, 64)", border: "3px solid", borderRadius:"20px"}}>
                                    <section className="card"  >
                                    <div className="card-header" style={{padding:12+"px",height:"35rem" ,backgroundColor: "#343A40", borderRadius:"20px"}}>
                                    <div className="media" style={{marginTop: "20%"}}>
                                                <a href="/#">
                                                    <img className="align-self-center rounded-circle mr-3" style={{width:"150px", height:"150px", borderRadius:50+"%", marginBottom:"30px"}} alt="" src="./assets/images/avatar.jpg" />
                                                </a>
                                                <div className="media-body">
                                                    <h3 className="text-light display-4" style={{color:"white"}}>Jim Doe</h3>
                                                    
                                                </div>
                                            </div>
  </div>


                                        <ul className="list-group list-group-flush profile" style={{margin:0, }}>
                                            <li className="list-group-item" >
                                                <a href="/#">
                                                <i className="fa fa-edit"></i>Edit Profile
                                                    
                                                </a>
                                            </li>
                                            <li className="list-group-item" style={{borderBottomRightRadius:"20px", borderBottomLeftRadius:"20px"}}>
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
