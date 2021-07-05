import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
	const [redirect,setRedirect]= useState(null);
	const [signUp,setSignUp]=useState(null);

  const SetUserName = (event) => {
    return setUserName(event.target.value);
  };
  const SetUserPassword = (event) => {
    return setUserPassword(event.target.value);
  };
  const LoginClick = () => {
		
    if (userName === 'abhishek' && userPassword === 'abhi') {

			setRedirect('/home')
		
    
    } else {
      alert('You do not signedup,Please sign up');
    }
  };
	const SignUpMe=()=>{
		setSignUp('/signup');
	}

	if(redirect){
		return(<Redirect to={redirect}></Redirect>)
	}
	else if(signUp){
		return(<Redirect to= {signUp}></Redirect>)
	}
  return (
    <div>
      <span>
        <input placeholder='username' onChange={SetUserName} />
      </span>

      <span>
        {' '}
        <input placeholder='password' onChange={SetUserPassword} />
      </span>
      <div>
        <span onClick={LoginClick}>Login</span>
        <span onClick={SignUpMe}>Signup</span>
      </div>
    </div>
  );
};
export default Login;
