import React, { useEffect, useRef, useState } from "react";

const ProtectedPage = ({ token }) => {
  const isRun = useRef(false);

  const [result, setResult] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    // using the keycloak token to access protected resources
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    // sendding this token to the backend in the Authorization header to access protected resources

    // Simulate an API call to fetch protected data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/data", config);
        const result = await response.json();
        setResult(result);
        console.log("Protected data:", result);
      } catch (error) {
        console.error("Error fetching protected data:", error);
      }
    };

    fetchData();

    const fetchData2 = async () => {
      try {
        const response = await fetch("http://localhost:3000/documents", config);
        const result = await response.json();
        setUserData(result);
        console.log("Protected documents:", result);
      } catch (error) {
        console.error("Error fetching protected documents:", error);
      }
    };

    fetchData2();
  }, []);

  return (
    <>
      <h1>Protected Page</h1>
      <p>This page is only accessible to authenticated users.</p>
      <p>Protected data: {JSON.stringify(result)}</p>
      <p>Logged in user data from backend</p>
      <p>{JSON.stringify(userData)}</p>
    </>
  );
};

export default ProtectedPage;
