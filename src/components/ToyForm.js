import React, {useState} from "react";

function ToyForm({addNewToy}) {

  const [toyName, setToyName] = useState("")
  const [toyImage, setToyImage] = useState("")

  //HANDLE INPUT EVENTS

  const handleToyName = (event) => setToyName(event.target.value)
  const handleToyImage = (event) => setToyImage(event.target.value)

  const handleNewToySubmit = (event) => {
    event.preventDefault()
    const OPTIONS = {
        method: "POST",
        headers: {
            "ACCEPT": "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify ({
            name: toyName,
            image: toyImage,
            likes: 0
        })
    }
     fetch("http://localhost:3001/toys", OPTIONS) 
     .then(res => res.json())
     .then(newToy => addNewToy(newToy))
     setToyName("")
     setToyImage("")
      
  }






  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
        onChange={handleToyName}
          type="text"
          name="name"
          value={toyName}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleToyImage}
          type="text"
          name="image"
          value={toyImage}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          onClick={handleNewToySubmit}
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
