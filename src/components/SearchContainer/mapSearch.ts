import SearchBox from "./SearchBox";

export const mapSearch = (query:string[]) => {
  let searchQuery: string[] = query;
  let counter = 0;

  let results = []

  for (let i = 0; i < searchQuery.length; i++) {
    counter ++;
  }

  for (let i = 0; i < counter; i++) {
    results.push(SearchBox)
  }
  
  return results;
};