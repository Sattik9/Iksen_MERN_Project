import React, { useEffect, useState } from 'react'
import Navbar from './Common/Navbar'
import axios from 'axios';
import Footer from './Common/Footer';
import { toast } from 'react-toastify';

const Profile = () => {
  const[user,setUser]=useState();
    const token=localStorage.getItem('token')
  const getUsers=()=>{
    axios({
      method: 'get',  // Replace with your HTTP method (get, post, etc.)
      url: 'http://localhost:7000/api/profile',
      headers: {
        'authorization': `${token}`
      }
    })
      .then(response => {
        // Handle the response
        setUser(response?.data?.UserDetails)
        console.log(response?.data?.UserDetails);
        toast(response?.data?.message);
      })
      .catch(error => {
        // Handle errors
        console.error('Request failed:',error);
        toast(error?.response?.data?.message);
    });
    }
      
    useEffect(()=>{
        getUsers()
    },[]);
  return (
    <>
    <Navbar/>
    <main id="main" className="main">
  <div className="pagetitle">
    <h1>Profile</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Profile</li>
      </ol>
    </nav>
  </div>
  <section className="section profile">
    <div className="row">
      <div className="col-xl-8">
        <div className="card">
          <div className="card-body pt-3">
            <ul className="nav nav-tabs nav-tabs-bordered">
              <li className="nav-item">
                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
              </li>
            </ul>
            <div className="tab-content pt-2">
              <div className="tab-pane fade show active profile-overview" id="profile-overview">
                
                <h5 className="card-title">Profile Details</h5>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label ">User Name</div>
                  <div className="col-lg-9 col-md-8">{user?.username}</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Email</div>
                  <div className="col-lg-9 col-md-8">{user?.email}</div>
                </div>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<Footer/>
    
    </>
  )
}

export default Profile