import { Container } from "../styles/global";
import { useState } from "react";

import axios from "axios";

export default function Dashboard() {
  const url = "https://apiportfoliocaixeta.herokuapp.com/";
  const [datta, setData] = useState({
    name: "",
    date: "",
    image: "",
    description: "",
    iduser: "",
  });

  function handle(e) {
    const newDate = { ...datta };
    newDate[e.target.id] = e.target.value;
    setData(newDate);
    console.log(newDate);
  }

  function submit(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: url,
      data: {
        name: datta.name,
        date: datta.date,
        image: datta.image,
        description: datta.description,
      },
      headers: {
        Authorization: "Bearer " + "",
      },
    }).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <Container>
      <form onSubmit={(e) => submit(e)}>
        <input
          id="name"
          onChange={(e) => handle(e)}
          value={datta.name}
          type="text"
          name="name"
        />
        <input
          id="date"
          onChange={(e) => handle(e)}
          value={datta.date}
          type="text"
          name="date"
        />
        <input
          id="image"
          onChange={(e) => handle(e)}
          value={datta.image}
          type="text"
          name="image"
        />
        <input
          id="description"
          onChange={(e) => handle(e)}
          value={datta.description}
          type="text"
          name="description"
        />
        <button>Enviar</button>
      </form>
    </Container>
  );
}
