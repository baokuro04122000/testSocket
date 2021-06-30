import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RoutesAdmin from './screens/RoutesAdminScreen';
import SignInScreen from './screens/SigninScreen';
import {signout} from './actions/userActions';
function App() {
  const userSignin = useSelector(state=>state.userSignIn);
  const {userInfo}=userSignin;
  return (
    <>
      {userInfo ? (
        <RoutesAdmin/>
      ):(
        <SignInScreen/>
      )}
    </>
  );
}

export default App;
