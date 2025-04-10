import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <h2>Contact number for Swiggy</h2>
      <form className="mt-4 flex items-center">
        <input
          className="border border-black ml-3 p-2"
          type="text"
          placeholder="name"
        />
        <input
          className="border border-black ml-3 p-2"
          type="text"
          placeholder="message"
        />
        <button className="ml-3 bg-amber-200 p-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
