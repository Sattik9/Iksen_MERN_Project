import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
          e.preventDefault();
          try{
             const result=await axios.post("http://localhost:7000/api/login",{email,password});
            localStorage.setItem("token",result?.data?.Token);
            localStorage.setItem("role",result?.data?.Role);
            localStorage.setItem("name",result?.data?.name)
            const Roles=localStorage.getItem("role");
            if(Roles==="admin"){
              navigate("/")
            }else if(Roles==="user"){
              navigate("/profile")
            }
          }catch(error){
             toast(error?.response?.data?.message)
             console.log(error);
          }
    }
  return (
    <>
    <main>
  <div className="container">
    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center py-4">
              <a href="index.html" className="logo d-flex align-items-center w-auto">
                <img src="assets/img/logo.png" alt />
                <span className="d-none d-lg-block">NiceAdmin</span>
              </a>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                  <p className="text-center small">Enter your username &amp; password to login</p>
                </div>
                <form className="row g-3 needs-validation"  onSubmit={(e)=>handleSubmit(e)}>
                <div className="col-12">
                    <label htmlFor="yourEmail" className="form-label">Your Email</label>
                    <input type="email" name="email" className="form-control" id="yourEmail" onChange={(e)=>setEmail(e.target.value)} required />
                    <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="yourPassword" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="yourPassword" onChange={(e)=>setPassword(e.target.value)} required />
                    <div className="invalid-feedback">Please enter your password!</div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="remember" defaultValue="true" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">Login</button>
                  </div>
                  <div className="col-12">
                    <p className="small mb-0">Don't have account? <Link to="/register">Create an account</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>

    
    </>
  )
}

export default Login