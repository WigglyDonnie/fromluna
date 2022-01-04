import * as React from "react";

import LoginButton from "./LoginButton";
import QnaButton from "./QnaButton";

import "./LoginBar.scss"; 

export default function LoginBar() {
  return (
  
  <div className='LoginBar'>
   <LoginButton />
   <QnaButton />
    
  </div>

  );
};
