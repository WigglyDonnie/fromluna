import React, { useState } from "react";

function LoginMenu() {
  const [authed, setAuthed] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="LoginMenu">
      <button onClick={() => setAuthed(true)}> Login </button>
      <button onClick={() => setAuthed(false)}> Logout </button>

      <div>{authed ? <div>IM A NAME</div> : <div>IM NOT A NAME</div>}</div>
    </div>
  );
}

export default LoginMenu;
