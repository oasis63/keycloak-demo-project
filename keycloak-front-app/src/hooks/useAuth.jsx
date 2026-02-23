import Keycloak from "keycloak-js";
import { useEffect, useState, useRef } from "react";

const useAuth = () => {
  const [isLogin, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const keycloakRef = useRef(null);

  const [token, setToken] = useState(null);

  useEffect(() => {
    if (keycloakRef.current) return; // Prevent multiple initializations

    const client = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
    });

    keycloakRef.current = client;

    client
      .init({ onLoad: "login-required" })
      .then((authenticated) => {
        console.log("Keycloak authenticated:", authenticated);
        setLogin(authenticated);
        setLoading(false);
        if (authenticated) {
          setToken(client.token);
        }
      })
      .catch((err) => {
        console.error("Keycloak init error:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const logout = () => {
    if (keycloakRef.current) {
      keycloakRef.current.logout();
    }
  };

  return { token, isLogin, isLoading, error, logout };
};

export default useAuth;
