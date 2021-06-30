import React,{useEffect, useRef} from 'react';
import io from 'socket.io-client';
import {useDispatch, useSelector} from 'react-redux';
import {addContact} from '../../actions/contactActions';
import {addAssignment} from '../../actions/assignmentAction';
import {Button} from 'antd';
export default function TestAPI(props) {
    const userSignin = useSelector(state => state.userSignIn);
    const {userInfo} = userSignin;
    const socket = useRef(io('http://127.0.0.1:8000',{
        query: {
          token:userInfo ? userInfo.token : 'hi',
        }
    }))
    const addNewContact = useSelector(state=>state.addContact);
    const {loading, success, error} = addNewContact;

    console.log({userInfo});
    const addNewAsignment = useSelector(state=>state.addAssignment);
    const {
        loading:loadingAssignment,
        success:successAssignment,
        error:errorAssignment
    } = addNewAsignment;
    
    useEffect(()=>{
        if(!userInfo){
            props.history.push('/');
        }
        if(successAssignment){
            const {assignmented} = successAssignment;
            socket.current.emit('admin-send-action-to-server',{
                adminId:assignmented.adminId,
                deviceId:assignmented.deviceId,
                actions:assignmented.actions,
                contacts:assignmented.contacts,
                context:assignmented.context
            })
        }
        socket.current.on('server-req-send-action-to-MB',(data)=>{

            console.log({success:data})
        })
        socket.current.on('server-res-register-to-MB',({status,message,token})=>{
            console.log(status, message, token);
        })
        socket.current.on('server-res-register-fail-to-MB',({status,message})=>{
            console.log(status, message);
        })
        socket.current.on('server-res-login-to-MB',({status, message, token})=>{
            console.log({status, message, token});
        })
        socket.current.on('server-res-login-fail-to-MB',({status, message})=>{
            console.log({status, message});
        })
    })
    const dispatch = useDispatch()
    const testAddContact = () => {
        const {adminId,name,phones} = {
            adminId:userInfo._id,
            name:'test  phones',
            phones:[
                {
                    phone:'0123456789',
                    name:'bettter',
                    birthday:'12/4/1999'
                },
                {
                    phone:'0987654321',
                    name:'marry',
                    birthday:'21/4/2000'
                }
            ]
        };
        dispatch(addContact({adminId,name,phones}));

    }
    const testAddAssignment = () => {
        const {adminId,deviceId,actions,contacts,context} = {
            adminId:userInfo._id,
            deviceId:'60d932f4bc90b835307fa7b1',
            actions:'message',
            contacts:[
                {
                    phone:'0123456789',
                    name:'bettter',
                    birthday:'12/4/1999'
                },
                {
                    phone:'0987654321',
                    name:'marry',
                    birthday:'21/4/2000'
                }
            ],
            context:'Thanks for use their application'
        };
        dispatch(addAssignment({adminId,deviceId,actions,contacts,context}))
    }
    const testRegisterMB = () => {
        const data = {
            username:'hello Ky',
            deviceId:'14231',
            password:'hello'
        }
        socket.current.emit('mobile-req-register',data)
    }
    const testSignInMB = () => {
        const data = {
            username:'hello Ky',
            password:'hello'
        }
        socket.current.emit('mobile-req-login',data);
    }
    return (
        <div>
            <Button onClick={testAddContact}> test  add a new contact </Button>
            <Button onClick={testAddAssignment}> test  add a new assignment </Button>
            <Button onClick={testRegisterMB}> test  register MB </Button>
            <Button onClick={testSignInMB}> test  sign in MB </Button>
        </div>
    )
}
