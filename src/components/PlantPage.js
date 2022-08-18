import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
  fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plants => setPlants(plants))
  }, [])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  let filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const addNewPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  console.log(filteredPlants)

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} addNewPlant={addNewPlant}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;

//put data on the dom
//1 import useState, useEffect d
//2 set state variable d 
//3 fetch request d 
//4 wrap fetch in useEffect d 
//5 console log data and set to state d 
//6 pass down props to plantlist , accept props
//7 map data to plant card
//8 accept props in plant card 
//9 populate data in card 

















































//MOCK CODE CHALLENGE APPEMPT 1 8/16 (SUCCESSFUL )

// // id: 1
// // image: "./images/aloe.jpg"
// // name: "Aloe"
// // price: 15.99

// import React, {useState, useEffect} from "react";
// import NewPlantForm from "./NewPlantForm";
// import PlantList from "./PlantList";
// import Search from "./Search";



// function PlantPage() {

//   const [plants, setPlants] = useState([])
//   const [searchTerm, setSearchTerm] = useState("")

//   useEffect(() => {
//     fetch('http://localhost:6001/plants')
//       .then(res => res.json())
//       .then(plants => setPlants(plants))
//   }, [])
//   console.log(plants)

//   const searchHandler = (e) => {
//     setSearchTerm(e.target.value)
//   }

//   let filteredPlants = plants.filter(plant => {
//     return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
//   })

//   console.log(filteredPlants)
//   return (
//     <main>
//       <NewPlantForm plants={plants} setPlants={setPlants}/>
//       <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchHandler={searchHandler}/>
//       <PlantList plants={filteredPlants}/>
//     </main>
//   );
// }

// export default PlantPage;


//fetch to dom
//grab useState and useEffect in plant page
//fetch to console.log data
//declare state variable 
//create fetch with useEffect
//put variables in fetch 
//pass props to plant list , accept 
//pass props to plant card
//map plants in plant list to plant card
