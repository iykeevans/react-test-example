import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>{email}</div>
      Login:
      <label>
        Email:
        <input
          type="text"
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="text"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button>Submit</button>
    </div>
  );
};

export default Login;
