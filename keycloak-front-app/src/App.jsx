import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useAuth from "./hooks/useAuth";
import ProtectedPage from "./components/ProtectedPage";
import PublicPage from "./components/PublicPage";

function App() {
  const { isLogin, token, isLoading, error, logout } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1> Keycloak Demo App </h1>

      <p>Token : {token}</p>

      <p>Is user logged in? {isLogin ? "Yes" : "No"}</p>
      {isLogin && <button onClick={logout}>Logout</button>}

      {isLogin ? <ProtectedPage token={token} /> : <PublicPage />}
    </>
  );
}

export default App;
