import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [ isSignIn, setIsSignIn ] = useState(true);
  const [  errorMesage, setErrorMessage ] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggeleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }

  const handleButtonClick = () =>{
    //checkValidateData(email, password);
    

    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    
    
    if(!isSignIn){
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log(user);
          navigate("/");
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorMessage + "hi " + errorCode) ;
        });

    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage + "hi" + errorCode) ;
        });
    }
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-3/12 p-12 my-36 bg-black mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="text-3xl text-white py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-red-500">{errorMesage}</p>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700"
          ref={email}
        />

        <input
          type="password"
          placeholder="password"
          className="p-4 my-2 w-full bg-gray-700"
          ref={password}
        />

        <button
          className="p-3 my-2 bg-red-700 w-full"
          type="submit"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggeleSignInForm}>
          {isSignIn ? "New to Netflix? Sign In" : "Already a User? Sign Up"}
        </p>
      </form>
    </div>
  );
}

export default Login;