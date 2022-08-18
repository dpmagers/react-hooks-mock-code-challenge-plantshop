//1 grab state hook in search d 
//2 declare state variable in parent d 
//3 pass down state variable as props, accept props d
//4 put handler on onChange input 
//5 create handler function (console.log)
//6 create handler logic w/setState var
//7 create filter for search with logic 
//8 add filter var to plantList map 


import React, {useState} from "react";

function Search({search, searchTerm, setSearchTerm}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {search}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
    </div>
  );
}

export default Search;















































//MOCK CODE CHALLENGE APPEMPT 1 8/16 (SUCCESSFUL )

// //create a name search for plant names 
// //grab state in search component 
// //declare state variables in search parent (plant page)
// //pass down props to search
// //create onChange handler 
// //create handler function in plant page (console.log)

// //create filter 
// //add filter logic 
// //

// import React, {useState} from "react";

// function Search({searchTerm, setSearchTerm, searchHandler}) {
//   return (
//     <div className="searchbar">
//       <label htmlFor="search">Search Plants:</label>
//       <input
//         type="text"
//         id="search"
//         placeholder="Type a name to search..."
//         onChange={(e) => searchHandler(e)}
//       />
//     </div>
//   );
// }

// export default Search;
