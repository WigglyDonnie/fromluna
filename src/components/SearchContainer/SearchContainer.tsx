import * as React from "react";

import './SearchContainer.scss'

import SearchBox from "./SearchBox";

export default function SearchContainer() {

  return (
  <div className='SearchContainer'>
  {mapSearch(['bing', 'bang', 'bong'])}
  </div>

  );
};

const mapSearch = (query:string[]) => {
  let searchQuery: string[] = query;
  let counter = 0;

  let results = <SearchBox/>

  for (let i = 0; i < searchQuery.length; i++) {
    counter ++;
  }

  for (let i = 0; i < counter; i++) {
    
  }
  
  return results;
};
