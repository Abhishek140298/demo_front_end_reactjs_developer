import React ,{useState} from 'react';
import {Redirect} from 'react-router-dom';

const Signup = () => {
	const [submit,setSubmit]=useState(null);
	const SubmitDetails=()=>{
		setSubmit('/');
	}
	if(submit){
		alert("Please login");
		return(<Redirect to={submit}></Redirect>)
	}
  return (
    <div>
      <input placeholder='name' />
			<input placeholder='password'/>
			<input placeholder='mobile no.'/>
			<span onClick={SubmitDetails}>SignUp</span>
    </div>
  );
};
export default Signup;
