export const mapSearch = (query:string[]) => {
  let searchQuery: string[] = query;
  let counter = 0;

  for (let i = 0; i < searchQuery.length; i++) {
    counter ++;
  }
  
  return counter;
};