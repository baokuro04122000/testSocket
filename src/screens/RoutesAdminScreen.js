
import React,{useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import io from 'socket.io-client';
import AdminLayout from '../layouts/adminLayout';
import {signout} from '../actions/userActions';
import { Redirect } from 'react-router';
import HomeComponent from '../layouts/contentMenu/components/homeComponent';
import DeviceComponent from '../layouts/contentMenu/components/deviceComponent';
import HistoryComponent from '../layouts/contentMenu/components/historyComponent';
import PhoneComponent from '../layouts/contentMenu/components/phoneComponent';
import SenderComponent from '../layouts/contentMenu/components/senderComponent';
import TestAPI from '../layouts/test/testAPI';
function RoutesAdmin(props) {
  const userSignin = useSelector(state=>state.userSignIn);
  const {userInfo}=userSignin;
  console.log(userInfo);
  
  const socket = useRef(io('http://127.0.0.1:8000',{
    query: {
      token:userInfo ? userInfo.token : 'hi',
    }
  }))
  const dispatch = useDispatch();
  const setUpSocket = () =>{ 
      socket.current.on('auth-faild',({error})=>{
        console.log(error);
        if(error==='token is expried') throw dispatch(signout());
      })
      socket.current.on('connection',()=>{
        console.log(socket.current.id)
      })
      socket.current.on('user-connecting',({message})=>{
        console.log(message)
      })
      socket.current.on('server-req-send-action-to-MB',(data)=>{

        console.log({success:data})
      })
  }
  const logout = () => {
      dispatch(signout())
  }
  useEffect(()=>{
    setUpSocket();
  })
  return (
    <>
        {/* <button onClick={logout}>logout</button> */}
        <Router>
            <Switch>
              <AdminLayout path={'/home'} component={HomeComponent}/>
              <AdminLayout path={'/devices'} component={DeviceComponent} />
              <AdminLayout path={'/phones'} component={PhoneComponent} />
              <AdminLayout path={'/history'} component={HistoryComponent} />
              <AdminLayout path={'/sender'} component={SenderComponent} />
              <AdminLayout path={'/testAPI'} component={TestAPI} />
              <Redirect to="/home"  />
            </Switch>
        </Router>
    </>
  
  );
}

export default RoutesAdmin;
