import React, {useState} from 'react';
import Brand from './Brand';
import LoginMenu from './LoginMenu'

function Nav() {

  const [formValue, setFormValue] = useState("");



  return (
    <div className="Nav">
      <Brand />
      <LoginMenu value={formValue}/>
      <input onChange={(event) => {setFormValue(event.target.value)}} type="text" name="name" autoComplete="off"/>
    </div>
  );
}

export default Nav;
