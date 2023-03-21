import React, { useState } from "react";
import "../styles/components/LoginBox.css"

export function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Log in the user using email and password.
  };

  return (
    <form className="login-box" onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}
