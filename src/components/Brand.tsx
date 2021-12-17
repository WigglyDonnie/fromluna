import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './Brand.scss';

library.add(fas)

// ...


function Brand() {
  return (
    <div className="Brand">
      <FontAwesomeIcon className="MoonIcon" icon={faMoon} />
      <div className="title">From LUNA</div>
    </div>
  );
}

export default Brand;
