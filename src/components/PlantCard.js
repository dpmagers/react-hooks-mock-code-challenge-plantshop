import React, {useState} from "react";

function PlantCard({plant}) {

  const [inStock, setInStock] = useState(true)

  const toggleStock = () => {
    setInStock(inStock => !inStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={toggleStock}>In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

      {/* <button className={inStock ?  "primary" : ""} onClick={toggleStock}>
      {inStock ? "In Stock" : "Sold Out" }</button> */}


export default PlantCard;

//grab state 
//declare state variable 
//put onClick on button with handler ref
//create handler function 
//give conditional logic to classname and text label
























































//MOCK CODE CHALLENGE APPEMPT 1 8/16 (SUCCESSFUL )


// import React, {useState} from "react";

// function PlantCard({plant}) {

//   const [isInStock, setIsInStock] = useState(true)

//   const inStockHandler = (e) => {
//     setIsInStock(isInStock => !isInStock)
//     console.log(e)
//   }


//   return (
//     <li className="card">
//       <img src={plant.image} alt={plant.name} />
//       <h4>{plant.name}</h4>
//       <p>Price: ${plant.price}</p>

//         <button onClick={inStockHandler} className= {isInStock? "primary" : ""}>
//         {isInStock? "Is In Stock" : "Sold Out"}
//         </button>
 
//     </li>
//   );
// }
// //would need to add this category to the plant list I think 
// // onClick={inStockHandler} 

//       {/* {isInStock ? (
//         <button onClick={inStockHandler} className= {isInStock? "primary" : ""}></button>
//         // <button className="primary">In Stock</button>
//       ) : (
//         <button>Out of Stock</button>
//       )} */}

// export default PlantCard;
