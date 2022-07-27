import React from 'react';
import { useFormik } from 'formik';
import './App.css';

const App = () => {
  const formik = useFormik({
    initialValues : {
      first :'',
      last : '',
      email : '',
      password : '',
      confirmpassword : '',
    }
  });
  return (
      
        <div className='main '>
        <div className='sign-up '>
        <h1> Sign-up Here</h1>
        <form>
          <input type="text" placeholder='enter your first name' name="first name" className='first' autoComplete='off'></input>
          <input type="text" placeholder="enter your last name"  name="last name" className='last' autoComplete='off'></input>
          <input type="text" placeholder="enter your email" name="email" className='email' autoComplete='off'></input>   
          <input type="text" placeholder="enter your password" name="password" className='password' autoComplete='off'></input>   
          <input type="text" placeholder="enter confirm password" name="password" className='confirmpassword' autoComplete='off  '></input>       
          <input type='submit' value="submit" className='save-btn'/>
          </form>
          </div> 
          </div>
    
  );
}

export default App;
