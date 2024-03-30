import React, { useState, useEffect } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  console.log(name, email, message);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      setIsNameValid(false);
      return;
    }
    else {
        setIsNameValid(true);
    }
    console.log(`${name} just contacted you`);
  };
  useEffect(() => {
    alert("How are you doing")
  }, [])
  return (
    <div className="mt-6">
      <h1 className="font-bold text-2xl mb-3">Contact Form</h1>

      <form method="post" onSubmit={submitHandler}>
        <label for="name">Name</label>
        {!isNameValid && (
          <small className="text-red-500 text-xs block">
            This field is required.
          </small>
        )}

        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="form-input"
          id="name"
          placeholder="Insert name"
        />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="form-input"
          id="email"
          placeholder="Insert email"
        />
        <label for="message">Message</label>
        <textarea
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="message"
          className="form-input"
          id="message"
          placeholder="Type your message"
        />
        <button type="submit" className="btn-solid">
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default Form;
