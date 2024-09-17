import React, { useEffect, useState } from "react";

const XMLHttpRequestExample: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        setUsers(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Users List (XMLHttpRequest)</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default XMLHttpRequestExample;
