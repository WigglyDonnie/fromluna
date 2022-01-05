import * as React from "react";

import './SearchContainer.scss'
import SearchBox from "./SearchBox";
import {mapSearch} from "./mapSearch"


export default function SearchContainer() {

  console.log(mapSearch(['bing', 'bong', 'bo', 'bing', 'bong', 'bo']));
  return (
  <div className='SearchContainer'>
    <SearchBox/>
    <SearchBox/>
    <SearchBox/>
    <SearchBox/>
  </div>

  );
};
