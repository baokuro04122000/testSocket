import React, {useEffect} from 'react'
import socketIOClient from 'socket.io-client';
const ENDPOINT = 
window.location.host.indexOf('localhost') >= 0
? 'http://127.0.0.1:8000'
: window.location.host;
let sk;
export default function TestSocket() {
    const getUser = () => {
        sk.on('allUsers',({clients})=>{
            console.log(clients);
        })
    }
    useEffect(()=>{
        sk = socketIOClient(ENDPOINT)
        getUser()
    },[])
       
    return (
        <>
            <button onClick={getUser}>get user</button>
            <div>
                hello  world
            </div>
        </>
    )
}
