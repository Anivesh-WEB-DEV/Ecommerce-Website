

import React, { useState } from 'react'
import './Login copy.css'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    const [action, setAction] = useState('Login')

  return (
    <div className="wrapper">
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? 
            <div></div> : 
                <div className="input"> 
                <PersonIcon className='person_icon' sx={{fontSize: 35 , marginLeft:1  , marginRight:2}}/>
            <input type="text" placeholder='Name'/>
        </div>}
        
        <div className="input">
           <EmailIcon className='email_icon' sx={{fontSize: 35 , marginLeft:1 , marginRight:2}}/>
            <input type="email" placeholder='Email'/>
        </div>
        <div className="input">
            <LockIcon className='passwod_icon' sx={{fontSize: 35 , marginLeft:1 , marginRight:2}}/>
            <input type="password" placeholder='password'/>
        </div>
      </div>
      {action === "Sign Up" ? <div></div> : <div className="forgot_password">Lost Password?  
      <a href="#"> Click here!</a>
      </div>}
      
      <div className="submit_container">
        <div className={action === "Login" ? "submit gray" : "submit"}
        onClick={()=>{setAction('Sign Up')}}
        >Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"}
        onClick={()=>{setAction('Login')}}
        >Login</div>
      </div>
    </div>
    </div>
  )
}

export default Login







// import React, { useState } from 'react'
// import './Login copy.css'
// import { useHistory, Link } from 'react-router-dom';
// import axios from 'axios';
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';

// const Login = () => {
//     const [action, setAction] = useState('Login')

//   const history = useHistory();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showAlert, setShowAlert] = useState(false);
//   const [loginFailed, setLoginFailed] = useState(false);

//   const validateAndLogin = async () => {
//     if (email.trim() === '' || password.trim() === '') {
//       // Show an alert and prevent redirection
//       setShowAlert(true);
//       return;
//     }

//     setShowAlert(false); // Hide the alert

//     try {
//       const res = await axios.get(`https://api-8u0n.onrender.com/user?email=${email}&password=${password}`);
      
//       if (res.status === 200 && res.data.length > 0) {
//         console.log("login success");
//         alert('Login done!');
//         localStorage.setItem("user-info", JSON.stringify(res.data[0]));
//         history.push('/home');
//       } else {
//         setLoginFailed(true);
//       }
//     } catch (error) {
//       // An error occurred, show an alert
//       setLoginFailed(true);
//     }
//   };
//   const handleSignUpClick = () => {
//     setAction('Sign Up');
//     // Call additional functions if needed
//     validateAndLogin();
//   };

//   const handleLoginClick = () => {
//     setAction('Login');
//     // Call additional functions if needed
//     validateAndLogin();
//   };


//   return (
//     <div className="wrapper">
//     <div className='container'>
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         {action === "Login" ? 
//             <div></div> : 
//                 <div className="input"> 
//                 <PersonIcon className='person_icon' sx={{fontSize: 35 , marginLeft:1  , marginRight:2}}/>
//             <input type="text" placeholder='Name' />
//         </div>}
        
//         <div className="input">
//            <EmailIcon className='email_icon' sx={{fontSize: 35 , marginLeft:1 , marginRight:2}}/>
//             <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
//         </div>
//         <div className="input">
//             <LockIcon className='passwod_icon' sx={{fontSize: 35 , marginLeft:1 , marginRight:2}}/>
//             <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//       </div>
//       {action === "Sign Up" ? <div></div> : <div className="forgot_password">Lost Password?  
//       <a href="#"> Click here!</a>
//       </div>}
      
//       <div className="submit_container">
//         <div className={action === "Login" ? "submit gray" : "submit"}
//         onClick={handleSignUpClick}
//         >Sign Up</div>
//         <div className={action === "Sign Up" ? "submit gray" : "submit"}
//         onClick={handleLoginClick}
//         >Login</div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Login

