import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

// ...


function Brand() {
  return (
    <div className="Brand">
      <FontAwesomeIcon icon={faMoon} />
    </div>
  );
}

export default Brand;
