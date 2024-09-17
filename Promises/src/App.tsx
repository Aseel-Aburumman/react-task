import React, { useState } from "react";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  // API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

  // Function using .then() syntax
  const fetchDataWithThen = () => {
    setLoading(true);
    setError(null);
    setData(null); // Clear previous data

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  // Function using async/await syntax
  const fetchDataWithAsyncAwait = async () => {
    setLoading(true);
    setError(null);
    setData(null); // Clear previous data

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Promises with Then and Await</h2>

      <div className="mb-4">
        <button className="btn btn-primary me-3" onClick={fetchDataWithThen}>
          Fetch with .then()
        </button>
        <button className="btn btn-primary" onClick={fetchDataWithAsyncAwait}>
          Fetch with async/await
        </button>
      </div>

      {/* Display Loading Message */}
      {loading && (
        <div className="alert alert-info" role="alert">
          Loading...
        </div>
      )}

      {/* Display Error Message */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {/* Display Data when fetched */}
      {data && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo ID: {data.id}</h5>
            <p className="card-text">
              <strong>Title:</strong> {data.title}
            </p>
            <p className="card-text">
              <strong>Completed:</strong> {data.completed ? "Yes" : "No"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
