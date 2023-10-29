import React, { useEffect, useState } from "react";
import axios from "axios"
import  {Link}  from "react-router-dom";
import "./List.css";
import { toast } from 'react-toastify';
const List = () => {
  const [users, setUsers] = useState([]);
  

  const getAllContact  = async() =>{
    await axios.get("/api/v1/contactcrud/allcontact")
    .then(result=>setUsers(result.data))
    .catch(error => console.log(error))
  }

  const handleDelete = (id)=>{
 
     axios.delete('/api/v1/contactcrud/deletecontact/'+id)
     .then(toast.success("deleted successfully"),
    window.location.reload())
     .catch(error => console.log(error))
  }
  useEffect(() =>{
    getAllContact()
   },[])

  return (
    <>
    <div className="main">
    <h1>All Contacts</h1>
    <table>
    <thead>
      <tr>
        <th>NAME</th>
        <th>Contact</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {
        users?.map((user) => {
        return  <tr>
            <td>{user.name}</td>
            <td>{user.contact}</td>
            <td>{user.email}</td>
            <td>
            <Link to = {`/update/${user._id}`  } ><button className="upd">Edit</button></Link>
              <button className="del" onClick={(e)=> handleDelete(user._id)}>Delete</button>
            </td>
          </tr>
      })
      }
      </tbody>
      <Link to = '/add'><button className="shadow__btn">Add more +</button></Link>
    </table>
    </div>
    </>
  );
};

export default List;
