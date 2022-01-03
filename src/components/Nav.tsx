import * as React from 'react';

import './Nav.scss'

export default function Nav() {
  return (
        <div className='navBar'>
          <button>Sleep & Rest</button>
          <button>Eat</button>
          <button>Play</button>
          <button>Add</button>
        </div>
  );
}