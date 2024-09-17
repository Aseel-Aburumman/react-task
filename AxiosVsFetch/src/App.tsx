import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [axiosError, setAxiosError] = useState<string | null>(null);

  // Incorrect API URL to simulate an error
  const apiUrl = 'https://jsonplaceholder.typicode.com/invalidusers'; // Invalid URL

  // Function to fetch data using Fetch API
  const fetchDataWithFetch = async () => {
    setFetchError(null); // Reset error message
    try {
      const response = await fetch(apiUrl);

      // Fetch does not throw an error for HTTP errors like 404, so we need to check manually
      if (!response.ok) {
        throw new Error(`Fetch Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Fetch data:', data); // Won't be reached due to error
    } catch (error: any) {
      setFetchError(error.message);
    }
  };

  // Function to fetch data using Axios
  const fetchDataWithAxios = async () => {
    setAxiosError(null); // Reset error message
    try {
      const response = await axios.get(apiUrl);
      console.log('Axios data:', response.data); // Won't be reached due to error
    } catch (error: any) {
      // Axios automatically throws an error for non-2xx responses
      setAxiosError(`Axios Error: ${error.response?.status} - ${error.response?.statusText}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Axios vs Fetch Error Handling</h2>

      <div className="mb-4">
        <button className="btn btn-primary me-3" onClick={fetchDataWithFetch}>
          Fetch API Request
        </button>
        <button className="btn btn-primary" onClick={fetchDataWithAxios}>
          Axios API Request
        </button>
      </div>

      {/* Display Fetch error */}
      {fetchError && (
        <div className="alert alert-danger" role="alert">
          <strong>Fetch Error:</strong> {fetchError}
        </div>
      )}

      {/* Display Axios error */}
      {axiosError && (
        <div className="alert alert-danger" role="alert">
          <strong>Axios Error:</strong> {axiosError}
        </div>
      )}
    </div>
  );
};

export default App;
