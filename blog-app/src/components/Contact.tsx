import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Contact Us</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea className="form-control" name="message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
