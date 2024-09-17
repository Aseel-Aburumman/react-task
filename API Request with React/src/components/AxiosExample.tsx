import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosExample: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUser(response.data[0]); // Display the first user
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">First User (Axios)</h2>
      <div className="card">
        <div className="card-body">
          {user ? (
            <h5 className="card-title">{user.name}</h5>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AxiosExample;
