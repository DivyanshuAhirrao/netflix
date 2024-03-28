import React, { useState } from 'react';
import styled from'styled-components';
import Headers from '../components/Headers';
import BackgroundImage from '../components/BackgroundImage';
// import { useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';



const SignUpPage = () => {
  
  const[showPassword, setShowPassword] = useState(false);
  const[formValues, setFormValues] = useState({email:"",password:""});

  // const navigate = useNavigate();


  const handleSignIn = async()=> {
    try {
      const{email,password} = formValues
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (error) {
      
    }
  }

  // onAuthStateChanged(firebaseAuth, (currentuser)=> {
  //   if(currentuser)navigate('/')
  // })

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Headers SignUp />
        <div className="body">
          <div className="text">
            <h1>Unlimited Movies, Tv shows and more</h1>
            <h4>Watch Anywhere, Cancel Anytime</h4>
            <h6>Ready to watch ? Enter your email or restart Membership</h6>
          </div>
          <div className="form">
            {showPassword ? (
              <input
                type="password"
                placeholder="password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            ) : (
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showPassword ? (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            ) : (
              <button onClick={handleSignIn}>Sign Up</button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
     position: relative;
     .content{
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.7);
      height: 100vh;
      width: 100%;
      grid-template-columns: 15vh 85vh;
      .body{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .text{
        display: flex;
        text-align: center;
        flex-direction: column;
        font-size: 2rem;
        color: white;
      }
      h1{
        padding: 0.2rem;
      }
      h4{
        margin-top: -1.5rem;
      }
      h6{
        margin-top: -1.5rem;
      }
     }
     .form {
    display: grid;
    width: 60%;
    grid-template-columns: ${({showPassword})=>showPassword? "1fr 1fr" : "2fr 1fr"};
    input {
      color: black;
      padding: 1.5rem;
      font-size: 1.2rem;
      width: 45rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.5rem 1rem;
      background-color: red;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 1.05rem;
      width: 10rem;
      font-weight:bolder
    }
  }
`

export default SignUpPage