//I can add new plant by submitting form 
//1 useState hook in NewPlantForm
//2 declare variables for each input in form
//3 add value to each input 
//4 add onChange event to each input, set to state
//5 add onSubmit on form with submitHandler
//6 create submit handler logic 
//7 use spread operator to setPlants for new plant
//8 reset form 
//9 POST request to make new plant persist

import React, {useState} from "react";
import PlantList from "./PlantList";

function NewPlantForm({plants, setPlants, addNewPlant}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0.00)

  const submitHandler = (e) => {
    e.preventDefault()
    let newPlant = {
      name,
      image,
      price
    }
    // setPlants([...plants, newPlant])
    setName("")
    setImage("")
    setPrice("")

    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant),
    })
    .then(res => res.json())
    .then(addNewPlant(newPlant))

//saying "number is not defined"
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="Plant name" value={name}
        onChange={e => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image}
        onChange={e => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price}
        onChange={e => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
















































//MOCK CODE CHALLENGE APPEMPT 1 8/16 (SUCCESSFUL )
// import React, {useState} from "react";

// function NewPlantForm({plants, setPlants}) {

//   const [name, setName] = useState("") 
//   const [image, setImage] = useState("") 
//   const [price, setPrice] = useState("") 

//   const submitNewPlant = (e) => {
//     e.preventDefault()
//     let newPlant = {
//       name: name,
//       image: image,
//       price: price
//     }
//     setPlants([...plants, newPlant])
//     setName("")
//     setImage("")
//     setPrice("")
//   }



//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form onSubmit={submitNewPlant}>
//         <input type="text" name="name" placeholder="Plant name" value={name}
//         onChange={e => setName(e.target.value)}/>
//         <input type="text" name="image" placeholder="Image URL" value={image}
//         onChange={e => setImage(e.target.value)}/>
//         <input type="number" name="price" step="0.01" placeholder="Price" value={price}
//         onChange={e => setPrice(e.target.value)}/>
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

// export default NewPlantForm;

// I can add a new plant to the page by submitting the form.
//1 grab state in NewPlantForm [done]
//2 pass down props to NewPlantForm [done]
////controlled form
//3 declare variables for each input [done]
//4 add value to each input [done]
//5 add onChange handlers to each input [done]
//6 onSubmit on form tag [done]
//7 create submitHandler 
//8 build new plant object
//9 set new state in handler 
//10 reset form 
