import reactLogo from "./assets/react.svg";
import "./App.css";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchFilter: React.FC = () => {
  const names: string[] = [
    "Vania",
    "Paquito",
    "Emmertude",
    "Thatcher",
    "Ozzy",
    "Liza",
    "Casie",
    "Burt",
    "Xavier",
    "Jobyna",
    "Lin",
    "Zeb",
    "Becky",
    "Olvan",
    "Bone",
    "Vasilis",
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredNames = names.filter(
    (name) => name.toLowerCase().includes(searchTerm.toLowerCase())
    // For each name in the list, check if the lowercase version of the
    // name contains the lowercase version of searchTerm.

    // .filter() method, which iterates over each name in the array 
    // and keeps only the names for which the function returns true.
  );

  return (
    <div className="container my-5">
      <div className="card bg-dark text-light p-3">
        <h4 className="mb-4 text-center">Search Users</h4>

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ul className="list-group">
          {filteredNames.map((name, index) => (
            <li
              key={index}
              className="list-group-item bg-dark text-light border-secondary"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;
