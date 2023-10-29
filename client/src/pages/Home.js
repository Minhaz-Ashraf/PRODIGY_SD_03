import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./home.css";
export const Home = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!name || !contact || !email) {
        toast.error("PLease Provide all fields");
      }
        const res = await axios.post("/api/v1/contactcrud/addcontact", {
          name,
          contact,
          email,
        });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="form">
            <div className="form__group field one">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form__field"
                placeholder="Enter Name"
                required
              />
              <label  className="form__label">
                Name
              </label>
            </div>

            <div className="form__group field two">
              <input
                type="number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="form__field"
                placeholder="Contact Number"
                required
              />
              <label  className="form__label">
                Contact
              </label>
            </div>

            <div className="form__group field">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form__field"
                placeholder="Enter Email"
                required
              />
              <label  className="form__label">
                Email
              </label>
              <button className="shadow__btn">Submit</button>
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
