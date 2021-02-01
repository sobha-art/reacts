
import React, { useState } from "react";
import "./Contact.css";
import { db } from './firebase'

const Contact = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        firstname: firstname,
        lastname: lastname,
      })
      .then(() => {
        setLoader(false);
        alert("save the data👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFirstName("");
    setLastName("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>SimpleForm</h1>

      <label>FirstName</label>
      <input
        placeholder="firstname"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label>LastName</label>
      <input
        placeholder="LastName"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Save
      </button>

      <button
        type="retrive"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Retrive
      </button>

    </form>
  );
};

export default Contact;