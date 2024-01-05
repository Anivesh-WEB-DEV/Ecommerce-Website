// import React from 'react'
// import './App.css'
// import 'react-toastify/dist/ReactToastify.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Cart from './components/Cart/Cart'
// import Home from './components/Home/Home'
// import PageNotFound from './components/NavCard/PageNotFound'
// import { ToastContainer } from 'react-toastify';
// const App = () => {

//   return (
//     <div className='App'>
//      <BrowserRouter>
//      <ToastContainer/>

//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/cart" element={<Cart/>} />
//           <Route path="/not-found" element={<PageNotFound/>} />
//         </Routes>
//      </BrowserRouter>
//     </div>
//   )
// }

// export default App

// App.jsx
import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
// import PageNotFound from "./components/NavCard/PageNotFound";
import Navbar from "./components/NavCard/Navbar";
import { ToastContainer } from "react-toastify";
import cardDetails from "./components/NavCard/cardDetails";
// import Login from "./components/LoginSignup/Login";
import ErrorBoundary from './components/NavCard/ErrorBoundary '

const App = () => {
  return (
    <ErrorBoundary>
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
         <ToastContainer />
        <Routes>
          <Route path="/" Component={Home} />
          {/* <Route path="/login" Component={Login} /> */}
          <Route path="/card" Component={cardDetails} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </BrowserRouter>
    </div>
    </ErrorBoundary>
  );
};

export default App;


