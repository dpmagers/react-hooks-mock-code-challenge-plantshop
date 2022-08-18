import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards">{plants.map(plant => <PlantCard plant={plant} key={plant.id}/>)}</ul>
  );
}

export default PlantList;


















































//MOCK CODE CHALLENGE APPEMPT 1 8/16 (SUCCESSFUL )

// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList({plants, filteredPlants}) {
//   return (
//     <ul className="cards">{plants.map(plant => <PlantCard plant={plant}/>)}</ul>
//   );
// }

// export default PlantList;
