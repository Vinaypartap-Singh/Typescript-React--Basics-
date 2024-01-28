import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function User() {
  const authContext = useContext(AuthContext);

  const handleLogin = () => {
    if (authContext) {
      authContext.setUser({
        name: "Vinay",
        email: "developervsandhu@gmail.com",
      });
    }
  };

  const handleLogOut = () => {
    if (authContext) {
      authContext.setUser(null);
    }
  };

  return (
    <div>
      <h1>Typescript with react usestate</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>

      {authContext?.user ? (
        <div>
          <h3>User Name is {authContext.user.name}</h3>
          <h3>Email {authContext.user.email}</h3>
        </div>
      ) : (
        <h3>Login To Continue</h3>
      )}
    </div>
  );
}
