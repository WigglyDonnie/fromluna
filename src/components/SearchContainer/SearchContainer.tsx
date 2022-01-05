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
  let results = []

  for (let i = 0; i < searchQuery.length; i++) {
    results.push(<SearchBox key={i}/>);
  }
  
  return results;
};
