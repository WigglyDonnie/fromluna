import React, {useState} from 'react';
import Brand from './Brand';
import LoginMenu from './LoginMenu'
import './Nav.scss';

function Nav() {

  const [formValue, setFormValue] = useState("type something");



  return (
    <div className="Nav">
      <Brand />
      <LoginMenu value={formValue}/>
      <input onChange={(event) => {setFormValue(event.target.value)}} type="text" name="name" autoComplete="off"/>
    </div>
  );
}

export default Nav;
