import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import { toast } from 'react-toastify';

const AdminPanel = () => {
      const[users,setUsers]=useState([]);
    
      const token=localStorage.getItem('token')
      
      const getUsers=async()=>{
        axios({
          method: 'get',  
          url: 'http://localhost:7000/api/adminpanel',
          headers: {
            'authorization': `${token}`
          }
        })
          .then(response => {
            // Handle the response
            setUsers(response?.data?.AdminPanel)
            console.log(response?.data?.AdminPanel);
            toast(response?.data?.message)
          })
          .catch(error => {
            // Handle errors
            console.error('Request failed:',error);
            toast(error?.response?.data?.message)
        });
      }


      useEffect(()=>{
          getUsers()
      },[]);
      
  return (
    <>
    <Navbar/>
    <main>
  <section className="section">
    <div className="row">
      <div className="col-lg-12">
      <div className="card">
  <div className="card-body">
    <h5 className="card-title">Table with hoverable rows</h5>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Sl.No.</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
       </tr>
      </thead>
      <tbody>
        {users?.map((item,index)=>{
            return(
          <>
          <tr>
          <th scope="row">{index+1}</th>
          <td>{item?.username}</td>
          <td>{item?.email}</td>
          </tr>
          </>)
        })}
        </tbody>
    </table>
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

export default AdminPanel