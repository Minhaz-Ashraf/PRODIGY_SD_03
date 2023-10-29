import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import "./home.css";

const Update = () => {
  const{id} =useParams();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/v1/contactcrud/contact/" + id)
      .then((result) => {
        setName(result.data.name);
        setContact(result.data.contact);
        setEmail(result.data.email);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put("/api/v1/contactcrud/updatecontact/" + id, {
      name,
      contact,
      email,
    })
    .then(result =>{
      console.log(result)
      toast('updated successfully')
      navigate('/')
    })
    .catch((error)=> console.log(error));
  };
  return (
    <>
      <form onSubmit={handleUpdate}>
        <div className="container">
          <div className="form">
            <div className="form__group field one">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form__field"
                placeholder="Name"
                required
              />
              <label htmlFor="name" className="form__label">
                Name
              </label>
            </div>

            <div className="form__group field two">
              <input
                type="number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="form__field"
                placeholder="Name"
                required
              />
              <label htmlFor="name" className="form__label">
                Contact
              </label>
            </div>

            <div className="form__group field">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form__field"
                placeholder="Name"
                required
              />
              <label htmlFor="name" className="form__label">
                Email
              </label>
              <button class="shadow__btn">Update</button>
            </div>
          </div>
          <div className="img">
            <img src="/home.png" alt="img" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Update;
