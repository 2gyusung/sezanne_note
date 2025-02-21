import React from "react";
import { Navigate, NavLink } from 'react-router';

const Mypage = () => {
  const isLoggedIn = true;
  
  if(!isLoggedIn){
    return <Navigate to={'/login'} replace={true}/>
  }
  return (
    <div
      style={{
        color: "gray",
        fontSize: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
    Mypage......
    </div>
  );
};

export default Mypage;
