import React, {useEffect, useState} from 'react';
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import CollectorRegistration from './pages/collector-registration';
import BusinessRegistration from './pages/business-register';
import DisplayCollectors from "./pages/collector-display-page";
import UserProfile from "./pages/user-profile";
import CollectorProfile from "./pages/collector-profile";
import AddressRegistration from './pages/address';
import CollectorPendingRequests from './pages/collector-requests';
import MonthlyPickupsAnalytics from './pages/collector-monthly-pickups';
import WeeklyPickupsAnalytics from './pages/collector-weekly-pickups';
import MonthlyRequestsAnalytics from './pages/collector-monthly-requests';
import WeeklyRequestsAnalytics from './pages/collector-weekly-requests';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import firebase from './firebase';

function App() {
  const [user, setUser] =useState(()=>{const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    return JSON.parse(loggedInUser)}});
  const [deviceToken, setDeviceToken] =useState("")
 

  useEffect(()=>{
    const messaging = firebase.messaging()
    messaging.requestPermission().then(()=>{
      return messaging.getToken({vapidKey: "BAtHdsRO2MqHx8w-cmDo0b-A_xFGBXyIJW_O7lgGOZUjZHuziBEVLovyqIteANk6TIdIeVIB6IMXodsegdSH5lM"})
    }).then(token=>{
      setDeviceToken(token);
    }).catch((err)=>{
      console.log(err);
      
    })
     messaging.onMessage((payload)=>{
       console.log(payload);
      
     })
 
    
    },[user])

    useEffect(()=>{
      if (deviceToken!==""){
        storeDeviceToken(user);
         }
    },[deviceToken])
    async function storeDeviceToken(user){
      const url = "http://18.217.195.205/api/auth/store-token"
          
       try{
              var token ='Bearer '+ user.access_token;
          const response = await axios.post(url,{
            device_token: deviceToken,
          },{
               headers:{
         Authorization: token,
               },
       });
       console.log(response.data);
  
       }catch(error){
         console.log(error);
       }
     }
console.log(deviceToken)

  return (
    
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route  path="/collectors" component={DisplayCollectors}/>

      <Route  path="/login"  component={Login} />

      <Route  path="/register" component={Register}/>
  
      <Route  path="/collector-registration" component={CollectorRegistration}/>
      <Route path="/business-registration" component={BusinessRegistration}/>


      <Route path="/my-account" component={UserProfile}/>

      <Route path="/collector-profile" component={CollectorProfile}/>
      <Route path="/your-pending-requests" component={CollectorPendingRequests} />
  

      <Route path="/address-registration" component={AddressRegistration}/>
      <Route path="/monthly-pickups-analytics" component={MonthlyPickupsAnalytics}/>
      <Route path="/weekly-pickups-analytics" component={WeeklyPickupsAnalytics}/>
      <Route path="/monthly-requests-analytics" component={MonthlyRequestsAnalytics}/>
      <Route path="/weekly-requests-analytics" component={WeeklyRequestsAnalytics}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
