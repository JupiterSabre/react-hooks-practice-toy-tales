import React from "react";

function ToyCard({toy, deleteToy}) {

function handleDelete() {
  const OPTIONS = {
    method: "DELETE",
}
  fetch(`http://localhost:3001/toys/${toy.id}`, OPTIONS)
  .then(res => res.json())
  .then(() => deleteToy(toy) )
}


  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
