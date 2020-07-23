import React, { useState } from "react";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(selectToken);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(password, email);
    dispatch(login(email, password));
  }

  if (token !== null) {
    history.push("/newpost");
  }

  return (
    <div>
      LOGIN!
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email@email.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
