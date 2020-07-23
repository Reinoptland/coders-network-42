import React from "react";

export default function SignUpPage() {
  return (
    <div>
      SIGNUP!
      <form>
        <label>Email</label>
        <input type="email" name="email" placeholder="email@email.com" />
        <label>Password</label>
        <input type="password" name="password" />
        <input type="submit" />
      </form>
    </div>
  );
}
