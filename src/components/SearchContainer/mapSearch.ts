export const mapSearch = (query:number) => {
  let sortable: string[] = [];

  for (let i = 0; i < sortable.length; i++) {
    console.log(typeof i, sortable[i]);
  }
  

  return sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
};