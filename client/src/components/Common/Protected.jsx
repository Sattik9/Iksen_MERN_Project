import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Comps}=props;
    const token=localStorage.getItem("token");
    let history=useNavigate();
    useEffect(()=>{
       if(token===null||token===""){
        history("/login")
       }
    },[]);
  return (
    <>
    <Comps/>
    </>
  )
}

export default Protected