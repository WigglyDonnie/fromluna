import * as React from "react";

import './SearchContainer.scss'
import {mapSearch} from "./mapSearch"


export default function SearchContainer() {

  return (
  <div className='SearchContainer'>
    {mapSearch(['bing', 'bong', 'bo'])}
  </div>

  );
};
