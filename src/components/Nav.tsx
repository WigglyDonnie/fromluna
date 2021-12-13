import React, {useState} from 'react';
import Brand from './Brand';
import LoginMenu from './LoginMenu'

function Nav() {

  const [formValue, setFormValue] = useState("");

  return (
    <div className="Nav">
      <Brand />
      <LoginMenu />
      <input onChange={(event) => {console.log(event.target.value)}} type="text" name="name" autoComplete="off"/>
    </div>
  );
}

export default Nav;
