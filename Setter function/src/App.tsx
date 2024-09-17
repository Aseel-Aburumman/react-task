import React, { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [user, setUser] = useState({
    name: "Ahmad Ali  ", // Initial name
    email: "ahmadali@example.com", // Initial email
  });

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [updatedUser, setUpdatedUser] = useState<{
    name: string;
    email: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setUser({ name, email });

    setUpdatedUser({ name, email });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Update User Information</h2>

      <div className="card mb-4">
        <div className="card-body">
          <h5>Current Information</h5>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {updatedUser && (
        <div className="mt-4 alert alert-success">
          <h5>Updated Information</h5>
          <p>
            <strong>Name:</strong> {updatedUser.name}
          </p>
          <p>
            <strong>Email:</strong> {updatedUser.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
