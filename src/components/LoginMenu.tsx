import React, { useState } from "react";



function LoginMenu(props:any): JSX.Element {
  const [authed, setAuthed] = useState(false);
  const [name, setName] = useState("");


  return (
    <div >

      <div className="LoginMenu">
      <button onClick={() => setAuthed(true)}> Login </button>
      <button onClick={() => setAuthed(false)}> Logout </button>
      <div>{authed ? <div>{props.value}</div> : <div>Log IN!!</div>}</div>
      </div>

      

      
    </div>
  );
}

export default LoginMenu;
