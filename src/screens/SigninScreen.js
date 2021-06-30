import React,{useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {signin} from '../actions/userActions';
export default function SignInScreen(props) {
    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    
    const userSignin = useSelector((state)=>state.userSignIn);
    const {userInfo} = userSignin;
    console.log(userInfo);
    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(signin(username,password));
    }
    useEffect(() => {
        if(userInfo){
            props.history.push('/home');
        }
    }, [props.history,userInfo])
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    Sign In
                </div> 
                <div>
                    <label htmlFor="username">user name</label>
                    <input type="text" onChange={(e)=>setUsername(e.target.value)} id="email" placeholder="Enter email" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="Enter password" required/>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}
