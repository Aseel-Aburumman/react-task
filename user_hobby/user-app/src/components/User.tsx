import React from "react";

interface UserProps {
  username: string;
  age: number;
  hobbies: string[];
}

const User: React.FC<UserProps> = ({ username, age, hobbies }) => {
  //  React Function Component that expects UserProps.
  // This ensures TypeScript enforces type checking on
  //  the props passed to the component.

  return (
    <div className="card m-4 p-3">
      <h2 className="card-title text-center">{username}</h2>
      <p className="text-center">Age: {age}</p>
      <h4>Hobbies:</h4>
      <ul className="list-group">
        {hobbies.map((hobby, index) => (
          <li className="list-group-item" key={index}>
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
