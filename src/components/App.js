import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  //STATE
  const [showForm, setShowForm] = useState(false);


  const [toys, setToys] = useState([])


  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then(res => res.json())
    .then(toys => setToys(toys))
      }, [])


      function addNewToy(newToy) {
        setToys([...toys, newToy])
      }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer addNewToy={addNewToy} toys={toys} />
    </>
  );
}

export default App;
